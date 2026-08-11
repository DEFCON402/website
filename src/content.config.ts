import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    file: z.string().optional(),
    fileType: z.enum(['pdf', 'pptx']).default('pdf'),
    speaker: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { talks };
