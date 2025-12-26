import { defineType, defineArrayMember } from 'sanity'

export default defineType({
    name: "contentBuilder",
    title: 'Content Builder',
    type: 'array',
    of: [
   defineArrayMember({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
   defineArrayMember({
      name: 'heading1',
      title: 'Heading1',
      type: 'string'
    }),


//    defineArrayMember({
//       name: 'textContent',
//       title:"Text Content",
//       type: 'blockContent',
//     }),
    ]
})