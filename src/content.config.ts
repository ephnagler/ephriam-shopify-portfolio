import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  loader: glob({base: `./src/content/work`,
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({image}) => z.object({
    title: z.string(),
    date: z.string(),
    published: z.boolean().default(false),
    image: image(),
    skills: z.array(z.string()).default([]),
  }),
});

export const collections = {
  work,
};