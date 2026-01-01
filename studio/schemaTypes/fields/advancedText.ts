import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'advancedText',
  title: 'Advanced Text',
  type: 'object',  // Changed from 'array' to 'object'
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})