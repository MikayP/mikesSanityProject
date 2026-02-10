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
      title: 'Columns',
      type: 'string',
      options: {
        list: [
          {title: '1 Column', value: '1'},
          {title: '2 Columns', value: '2'},
          {title: '3 Columns', value: '3'},
          {title: '4 Columns', value: '4'},
          {title: '5 Columns', value: '5'},
          {title: '6 Columns', value: '6'},
          {title: '7 Columns', value: '7'},
          {title: '8 Columns', value: '8'},
        ],
        layout: 'dropdown',
      },
    }),
        defineField({
      name: 'contentBuilder',
      title: 'Column Content Builder',
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
