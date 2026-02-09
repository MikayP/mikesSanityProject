import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'advancedText',
  title: 'Advanced Text',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'linkType',
                    title: 'Link Type',
                    type: 'string',
                    initialValue: 'external',
                    options: {
                      list: [
                        {title: 'Internal', value: 'internal'},
                        {title: 'External', value: 'external'},
                        {title: 'File', value: 'file'},
                      ],
                      layout: 'radio',
                    },
                    validation: (Rule) => Rule.required(),
                  },
                  {
                    name: 'internal',
                    title: 'Internal Reference',
                    type: 'reference',
                    to: [{type: 'page'}], // Adjust to your page types
                    hidden: ({parent}) => parent?.linkType !== 'internal',
                  },
                  {
                    name: 'external',
                    title: 'External URL',
                    type: 'string',
                    hidden: ({parent}) => parent?.linkType !== 'external',
                  },
                  {
                    name: 'file',
                    title: 'File',
                    type: 'file',
                    hidden: ({parent}) => parent?.linkType !== 'file',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
})