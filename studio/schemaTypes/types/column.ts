import {title} from 'node:process'
import {defineType, defineField} from 'sanity'
import {ActivityIcon, CogIcon, MobileDeviceIcon} from '@sanity/icons'

export default defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  groups: [
    {
      name: 'basic',
      title: 'Basic',
      default: true,
      icon: ActivityIcon,
    },
    {
      name: 'settings',
      title: 'Settings',
      icon: CogIcon,
    },
    {
      name: 'mobile',
      title: 'Mobile',
      icon: MobileDeviceIcon,
    },
  ],
  fieldsets: [
    {
      name: 'layout',
      title: 'Layout Settings',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'mobile',
      title: 'Mobile Layout Settings',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'basic',
    }),
    defineField({
      name: 'columnLayout',
      title: 'Column Layout',
      type: 'string',
      group: 'basic',
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
      // Column Content
      name: 'columnContent',
      title: 'Column Content',
      type: 'array',
      group: 'basic',
      of: [{type: 'heading'}, {type: 'advancedText'}, {type: 'imageField'}],
    }),
    defineField({
      // Flex Direction
      name: 'flexDirection',
      title: 'Flex Direction',
      type: 'string',
      initialValue: 'flex-col',
      fieldset: 'layout',
      options: {
        list: [
          {title: 'Row', value: 'flex-row'},
          {title: 'Column', value: 'flex-col'},
        ],
      },
      group: 'settings',
    }),
    defineField({
      // colHorizontalAlign
      name: 'colHorizontalAlign',
      title: 'Horizontal Alignment',
      type: 'string',
      initialValue: 'items-start',
      fieldset: 'layout',
      options: {
        list: [
          {title: 'Left', value: 'items-start'},
          {title: 'Center', value: 'items-center'},
          {title: 'Right', value: 'items-end'},
        ],
      },
      // hidden: ({parent, value}) => parent?.flexDirection === 'flex-row',
      group: 'settings',
    }),
    defineField({
      // Vertical Alignment
      name: 'colVerticalAlign',
      title: 'Vertical Alignment',
      type: 'string',
      initialValue: 'align-top',
      fieldset: 'layout',
      options: {
        list: [
          {title: 'Top', value: 'align-top'},
          {title: 'Center', value: 'align-middle'},
          {title: 'Bottom', value: 'align-bottom'},
        ],
      },
      // hidden: ({parent, value}) => parent?.flexDirection === 'flex-row',
      group: 'settings',
    }),
    defineField({
      // Text alignment
      name: 'colTextAlign',
      title: 'Text Alignment',
      type: 'string',
      initialValue: 'text-left',
      fieldset: 'layout',
      options: {
        list: [
          {title: 'Left', value: 'text-left'},
          {title: 'Center', value: 'text-center'},
          {title: 'Right', value: 'text-right'},
        ],
      },
      // hidden: ({parent, value}) => parent?.flexDirection === 'flex-row',
      group: 'settings',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      if (!title) {
        return {
          title: 'Column',
        }
      } else {
        return {
          title: title,
        }
      }
    },
  },
})
