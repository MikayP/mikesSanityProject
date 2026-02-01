// form.ts
import {defineType, defineField} from 'sanity'
import buttonStyle from '../fields/buttonStyles'

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
    buttonStyle, // 👈 reuse the field
       defineField({
      name: 'formCTA',
      type: 'string',
      title: 'Form CTA',
    }),
  ],
})
