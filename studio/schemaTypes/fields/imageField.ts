import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'imageField',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  fields: [
    // defineField({
    //   name: 'text',
    //   title: 'Text',
    //   type: 'string',
    //   validation: rule => rule.required(),
    // }),
    // defineField({
    //   name: 'level',
    //   title: 'Level',
    //   type: 'number',
    //   options: {
    //     list: [
    //       { title: 'H1', value: 1 },
    //       { title: 'H2', value: 2 },
    //       { title: 'H3', value: 3 },
    //     ],
    //     layout: 'radio',
    //   },
    //   initialValue: 2,
    // }),
  ],
//   preview:{
//     select: {
//         title: 'text',
//         subtitle: 'style'
//     }
//   }
})
