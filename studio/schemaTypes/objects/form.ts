import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'form',
  title: 'Form',
  type: 'object',
  fields: [
     defineField({
      name: 'formTitle',
      type: 'string',
      title: 'Form Title',
    }),

    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
})
