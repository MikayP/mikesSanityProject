import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Section',
  groups: [
    {
      name: 'basic',
      title: 'Basic',
      default: true,
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
      group: 'basic',
    }),
    defineField({
        name: "buttons",
        type: "array",
        group: "basic",
        of: [{ type: "button" }],
    }),

    defineField({
      name: 'heroStyle',
      type: 'string',
      title: 'Hero Style',
      group: 'settings',
      options: {
        list: [
            { title: 'Front Page Hero', value: 'main-hero' },
            { title: 'Sub Page Hero', value: 'sub-page-hero' },
        ],
      },
    }),
  ],
})
