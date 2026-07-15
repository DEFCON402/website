import { defineCollection, z } from 'astro:content';

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    speaker: z.string(),
    file: z.string(),
    fileType: z.enum(['pdf', 'pptx']).default('pdf'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { talks };
