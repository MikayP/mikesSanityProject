import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pill',
  title: 'Pills',
  type: 'object',
  fields: [
    defineField({
      name: 'pills',
      title: 'Pills',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              text: 'text',
              style: 'pillStyle',
            },
            prepare: ({text, style}) => {
              return {
                title: text || 'Untitled Pill',
                subtitle: style || 'No style selected',
              }
            },
          },
          fields: [
            defineField({
              name: 'pillImage',
              title: 'Image Icon',
              type: 'image',
            }),
            defineField({
              name: 'pillStyle',
              title: 'Pill Style',
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
        },
      ],
    }),
  ],
})