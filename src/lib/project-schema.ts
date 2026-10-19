import { z } from 'zod';

const nonEmptyText = z.string().trim().min(1);
const webUrl = z.string().url().refine(value => /^https?:\/\//.test(value), 'Use an HTTP or HTTPS URL');
const imagePath = nonEmptyText.refine(value =>
  !value.startsWith('/') &&
  !/[\\:?#]/.test(value) && !value.includes('\0') &&
  value.split('/').every(segment => segment !== '' && segment !== '.' && segment !== '..') &&
  /\.(png|jpe?g|webp|svg)$/i.test(value),
  'Use a PNG, JPG, JPEG, WebP, or SVG path relative to src/data/images/',
);

export const projectSchema = z.object({
  id: nonEmptyText.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase, hyphenated ID'),
  title: nonEmptyText,
  description: nonEmptyText,
  image: imagePath.or(z.literal('')).optional().default(''),
  problem: nonEmptyText.optional(),
  approach: nonEmptyText.optional(),
  impact: nonEmptyText.optional(),
  technologies: z.array(nonEmptyText),
  category: nonEmptyText,
  githubUrl: webUrl.or(z.literal('')),
  liveUrl: webUrl.or(z.literal('')),
  featured: z.boolean(),
  order: z.number().int().nonnegative(),
  visible: z.boolean(),
}).strict();

export const projectsSchema = z.array(projectSchema).superRefine((projects, context) => {
  const ids = new Set<string>();
  projects.forEach((project, index) => {
    if (ids.has(project.id)) {
      context.addIssue({ code: z.ZodIssueCode.custom, path: [index, 'id'], message: 'Project IDs must be unique' });
    }
    ids.add(project.id);
  });
});

export type Project = z.infer<typeof projectSchema>;

export function selectVisibleProjects(projects: Project[]): Project[] {
  return projects.filter(project => project.visible).sort((a, b) => a.order - b.order);
}
