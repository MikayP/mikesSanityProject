import { defineField, defineType } from "sanity";
import { SparkleIcon } from "@sanity/icons";

export default defineType({
  name: "button",
  type: "object",
  title: "Button Block",
  icon: SparkleIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      return {
        title: `Button: ${title}`,
      };
    },
  },
  groups: [
    {
      name: "basic",
      title: "Basic",
      default: true,
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
      group: "basic",
    }),
    defineField({
      name: "link",
      type: "link",
      group: "basic",
    }),
    defineField({
      name: "targetBlank",
      title: "Open in New Tab",
      type: "boolean",
      group: "basic",
      initialValue: false,
    }),
    defineField({
      name: "style",
      type: "string",
      options: {
        list: [
          { title: "Blue", value: "btn--blue" },
          { title: "White", value: "btn--blue-alt" },
          { title: "Hotpink", value: "btn--hotpink" },
          { title: "Outline Blue", value: "btn--outline" },
          { title: "Outline White", value: "btn--outline-alt" },
          { title: "Arrow Blue", value: "btn--arrow" },
          { title: "Arrow White", value: "btn--arrow-alt" },
        ],
      },
      initialValue: "btn--blue",
      group: "basic",
      readOnly: (props) => props?.parent?.lockStyles,
    }),
    // defineField({ 
    //   title: "Custom Classes",
    //   name: "customClasses",
    //   type: "string",
    //   group: "settings",
    // }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
});
