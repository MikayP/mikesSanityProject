import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  groups: [
    {
      name: 'basic',
      title: 'Basic',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'publishedDate',
      type: 'publishedDateType',
      group: 'basic',
    }),

    defineField({
      name: 'body',
      type: 'advancedText',
      group: 'basic',
    }),

    defineField({
      name: 'seo', // Field name can be different from type name
      type: 'seo', // This references the 'seo' schema type
      group: 'seo',
    }),
  ],
})
