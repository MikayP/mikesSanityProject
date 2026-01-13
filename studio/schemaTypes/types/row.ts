import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'row',
  title: 'Row Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),      

     defineField({
      name: 'columnLayout',
      title: 'Column Layout',
      type: 'string',
      options: {
        list: [
          {title: '1 Column Layout', value: '1'},
          {title: '2 Column Layout', value: '2'},
          {title: '3 Column Layout', value: '3'},
          {title: '4 Column Layout', value: '4'},
          {title: '5 Column Layout', value: '5'},
          {title: '6 Column Layout', value: '6'},
          {title: '7 Column Layout', value: '7'},
          {title: '8 Column Layout', value: '8'},
        ],
        layout: 'dropdown',
      },
    }),
        defineField({
      name: 'contentBuilder',
      title: 'Content Builder',
      type: 'contentBuilder',
    }),
    // defineField({
    //   name: 'backgroundColor',
    //   title: 'Background Color',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'White', value: 'white' },
    //       { title: 'Light Gray', value: 'gray' },
    //       { title: 'Black', value: 'black' },
    //     ],
    //   },
    // }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  //   prepare({ title }) {
  //     return {
  //       title: title || 'Untitled Row',
  //     }
  //   },
  // },
})
