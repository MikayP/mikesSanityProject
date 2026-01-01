import { defineType, defineArrayMember } from 'sanity'


export default defineType({
    name: "contentBuilder",
    title: 'Content Builder',
    type: 'array',
    of: [
   defineArrayMember({
      type: 'column',
    }),

    ]
})