import {defineField, defineType} from 'sanity'
import {publishedDateField} from '../fields/publishedDate'
import {pageBuilderFields} from '../fields/pageBuilderFields'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    }),

    {...publishedDateField},
    {...pageBuilderFields},
  ],
})
