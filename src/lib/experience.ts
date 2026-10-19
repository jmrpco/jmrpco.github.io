import 'server-only';
import { z } from 'zod';
import experienceData from '@/data/experience.json';

const text = z.string().trim().min(1);
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);
const schema = z.array(z.object({
  id: text.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: text,
  company: text,
  location: z.string().optional(),
  year: text,
  dateRange: text,
  startDate: month.optional(),
  endDate: month.optional(),
  duration: text.optional(),
  current: z.boolean(),
  summary: text.optional(),
  responsibilities: z.array(text),
  technologies: z.array(text),
  order: z.number().int().nonnegative(),
}).strict()).superRefine((entries, context) => {
  const ids = new Set<string>();
  entries.forEach((entry, index) => {
    if (ids.has(entry.id)) context.addIssue({ code: z.ZodIssueCode.custom, path: [index, 'id'], message: 'Experience IDs must be unique' });
    ids.add(entry.id);
    if (entry.startDate && entry.endDate && entry.endDate < entry.startDate) {
      context.addIssue({ code: z.ZodIssueCode.custom, path: [index, 'endDate'], message: 'End date must not precede start date' });
    }
  });
});

const result = schema.safeParse(experienceData);
if (!result.success) throw new Error(`Invalid src/data/experience.json: ${result.error.message}`);

// Current-role duration is refreshed on each static build, using the portfolio's timezone.
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Manila', year: 'numeric', month: '2-digit' }).formatToParts(new Date());
const currentMonth = `${today.find(part => part.type === 'year')?.value}-${today.find(part => part.type === 'month')?.value}`;

function durationBetween(start: string, end: string): string {
  const [startYear, startMonth] = start.split('-').map(Number);
  const [endYear, endMonth] = end.split('-').map(Number);
  const months = Math.max(0, (endYear - startYear) * 12 + endMonth - startMonth);
  if (months === 0) return 'Under 1 mo';
  return [Math.floor(months / 12) ? `${Math.floor(months / 12)} yr` : '', months % 12 ? `${months % 12} mo` : ''].filter(Boolean).join(' ');
}

export const experiences = result.data.sort((a, b) => a.order - b.order).map(entry => {
  const end = entry.current ? currentMonth : entry.endDate;
  return { ...entry, duration: entry.duration || (entry.startDate && end ? durationBetween(entry.startDate, end) : undefined) };
});
