import {title} from 'node:process'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'column',
      title: 'Column',
      type: 'array',
      of: [{type: 'heading'}, {type: 'advancedText'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      if (!title) {
        return {
          title: 'Column',
        }
      } else {
        return {
          title: title,
        }
      }
    },
  },
})
