import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pill',
  title: 'Pill',
  type: 'object',
  fields: [
    defineField({
      name: 'pillImage',
      title: 'Image Icon',
      type: 'image',
    }),
    defineField({
      name: 'pillStyle',
      title: 'Pill',
      type: 'string',
      description: 'Style',
      options: {
        list: [
          {title: 'Plain Text', value: 'pill-plain-text'},
          {title: 'Grey BG', value: 'pill-grey-bg'},
        ],
      },
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
  ],
})
