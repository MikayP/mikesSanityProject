import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'column',
      title: 'Column',
      type: 'array',
      of: [
        { type: 'heading' },
        { type: 'advancedText' },
      ],
    }),
  ],
})
