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
      // Title
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'basic',
    }),
    defineField({
      // Column Content
      name: 'column',
      title: 'Column',
      type: 'array',
      group: 'basic',
      of: [{type: 'heading'}, {type: 'advancedText'}],
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
      hidden: ({parent, value}) => parent?.flexDirection === 'flex-row',
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
