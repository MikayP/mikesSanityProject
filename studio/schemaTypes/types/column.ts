import { defineType, defineField, defineArrayMember } from 'sanity'
import contentBuilder from '../fields/contentBuilder'

export default defineType({
  name: 'column',
  title: 'Column',
  type: 'array',
//   of: [

//     defineArrayMember({
//         type: 'row',
//         }),

//         defineArrayMember({
//         type: 'column',
//         }),
//   ]

//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'content',
//       title: 'Content',
//       type: 'text',
//       rows: 3,
//     }),
//   ],
})
