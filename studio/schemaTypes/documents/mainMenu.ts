import { defineField, defineType } from "sanity";
// import { makeCustomLinkValidator } from "@/sanity/lib/validation/validateLink";

export default defineType({
  name: "mainMenu",
  type: "document",
  title: "Main Menu",
//   fieldsets: [
//     {
//       name: "settings",
//       title: "Advanced settings",
//       options: {
//         collapsible: true,
//         collapsed: true,
//       },
//     },
//     {
//       name: "submenu",
//       title: "Submenu",
//       options: {
//         collapsible: true,
//         collapsed: true,
//       },
//     },
//   ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Label",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description (optional)",
    }),
    // defineField({
    //   name: "link",
    //   type: "link",
    //   title: "Path",
    // //   validation: (rule) => makeCustomLinkValidator(rule),
    // }),
    // defineField({
    //   name: "submenuTitle",
    //   type: "string",
    //   title: "Submenu title",
    //   fieldset: "submenu",
    //   hidden: ({ parent }) => {
    //     return parent?.menuItems == undefined;
    //   },
    // }),
    // defineField({
    //   name: "menuItems",
    //   type: "array",
    //   title: "Menu items",
    //   fieldset: "submenu",
    //   of: [{ type: SchemaType.MenuItem }],
    // }),
    // defineField({
    //   name: "buttonText",
    //   description: "Sidebar item button text, only works on the first item in the submenu",
    //   type: "string",
    //   fieldset: "settings",
    //   initialValue: "Learn more",
    //   hidden: (parent) => {
    //     return parent?.parent?.menuItems?.length > 1;
    //   },
    // }),
    // defineField({
    //   name: "showIcon",
    //   description: "Show an icon next to the menu item title",
    //   type: "boolean",
    //   fieldset: "settings",
    // }),
    // defineField({
    //   name: "icon",
    //   description: "Icon to show, if left empty no icon will show.",
    //   type: "string",
    //   fieldset: "settings",
    //   options: {
    //     list: [
    //       {title: "Lock", value: "lock"}, // must be valid in AppIconName type
    //     ]
    //   },
    //   hidden: (parent) => !parent?.parent.showIcon,
    // }),
    // defineField({
    //   name: "classes",
    //   type: "string",
    //   title: "Classes",
    //   fieldset: "settings",
    // }),
    // defineField({
    //   name: "wrapperClasses",
    //   type: "string",
    //   title: "Wrapper classes",
    //   fieldset: "settings",
    // }),
  ],
});
