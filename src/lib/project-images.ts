import 'server-only';
import type { StaticImageData } from 'next/image';

type ImageModule = StaticImageData | { default: StaticImageData };
type ImageContext = {
  (filename: string): ImageModule;
  keys(): string[];
};

// Webpack's static import context makes Next.js emit hashed image assets into
// _next/static/media. Adding a file needs no generated manifest or component edit.
declare const require: {
  context(directory: string, recursive: boolean, pattern: RegExp): ImageContext;
};

const imageModules = require.context('../data/images', true, /\.(png|jpe?g|webp|svg)$/i);
const images = new Map<string, StaticImageData>();

for (const key of imageModules.keys()) {
  const imported = imageModules(key);
  images.set(key.slice(2), 'default' in imported ? imported.default : imported);
}

export function resolveProjectImage(filename: string): StaticImageData | null {
  return images.get(filename) ?? null;
}
