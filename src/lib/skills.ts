import 'server-only';
import skillData from '@/data/skills.json';
import { groupVisibleSkills, skillsSchema } from './skill-schema';

const result = skillsSchema.safeParse(skillData);

if (!result.success) {
  throw new Error(`Invalid src/data/skills.json: ${result.error.message}`);
}

// Next.js evaluates this module during static generation; no runtime data service.
export const skillGroups = groupVisibleSkills(result.data);
