import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  loader: glob({base: `./src/content/work`,
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({image}) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    icon: z.string().optional(),
    date: z.string(),
    published: z.boolean().default(false),
    image: image().optional(),
    skills: z.array(z.string()).default([]),
  }),
});

export const collections = {
  work,
};