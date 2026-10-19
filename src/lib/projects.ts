import 'server-only';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { projectsSchema, selectVisibleProjects } from './project-schema';
import { resolveProjectImage } from './project-images';

// Evaluated only during static generation; no browser fetch or runtime backend.
const source = 'src/data/projects.txt';
function loadProjects() {
  try {
    const records = projectsSchema.parse(JSON.parse(readFileSync(path.join(process.cwd(), source), 'utf8')));
    return selectVisibleProjects(records).map(project => ({
      ...project,
      resolvedImage: resolveProjectImage(project.image),
    }));
  } catch (error) {
    throw new Error(`Invalid ${source}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const projects = loadProjects();
export type PortfolioProject = (typeof projects)[number];
