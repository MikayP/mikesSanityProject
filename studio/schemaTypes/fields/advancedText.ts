import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'advancedText',
  title: 'Advanced Text',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
})
