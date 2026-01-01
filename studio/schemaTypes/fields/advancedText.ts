import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'advancedText',
  title: 'Advanced Text',
  type: 'array',
  description: 'TEST - If you see this, the schema is loaded', // Add this

  of: [
    {
      type: 'block',
    },
  ],
})
