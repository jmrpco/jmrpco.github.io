import { z } from 'zod';

const nonEmptyText = z.string().trim().min(1);
const categorySchema = nonEmptyText;

const iconSchema = z.string().trim().refine(value => {
  if (value === '') return true;
  if (/^\/icons\/[^?#\\]+\.(svg|png)$/i.test(value)) {
    return !value.split('/').includes('..');
  }
  try {
    return ['https:', 'http:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}, 'Use a local /icons/ SVG or PNG path, an HTTP/HTTPS URL, or an empty string for the fallback');

export const skillSchema = z.object({
  id: nonEmptyText.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase, hyphenated ID'),
  name: nonEmptyText,
  category: categorySchema,
  icon: iconSchema.default(''),
  order: z.number().int().nonnegative(),
  visible: z.boolean(),
}).strict();

export const skillsSchema = z.array(skillSchema).superRefine((skills, context) => {
  const ids = new Set<string>();
  skills.forEach((skill, index) => {
    if (ids.has(skill.id)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: [index, 'id'],
        message: 'Skill IDs must be unique',
      });
    }
    ids.add(skill.id);
  });
});

export type Skill = z.infer<typeof skillSchema>;
export type SkillCategory = Skill['category'];
export type SkillGroup = { category: SkillCategory; skills: Skill[] };

// Category order follows its first visible skill; ties retain JSON file order.
export function groupVisibleSkills(skills: Skill[]): SkillGroup[] {
  const groups = new Map<SkillCategory, Skill[]>();
  const visibleSkills = skills.filter(skill => skill.visible).sort((a, b) => a.order - b.order);

  for (const skill of visibleSkills) {
    const group = groups.get(skill.category);
    if (group) group.push(skill);
    else groups.set(skill.category, [skill]);
  }

  return Array.from(groups, ([category, categorySkills]) => ({ category, skills: categorySkills }));
}
