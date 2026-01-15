import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'card',
  title: 'Card',
  type: 'object',
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
      name: 'card',
      title: 'Card Style',
      type: 'string',
      group: 'settings',
      options: {
        list: [{title: 'Gradient Card', value: 'gradient-card'}],
      },
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      group: 'basic',
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
      group: 'basic',
    }),
    defineField({
        name:'pills',
        type:'string',
        title:'Pills',
        group:'basic',
        description: 'List of pills'
    }),
    defineField({
        name: 'button',
        title: 'Button',
        type: 'button',
        group: 'basic',
    }),
  ],
})
