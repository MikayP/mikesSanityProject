import { defineField, defineType } from "sanity";
import { schemaTypesWithPage } from "../utils/references";

const AllowedSchemes = ["https:", "http:", "mailto:", "tel:"];

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  groups: [
    {
      name: "link",
      default: true,
    },
    {
      name: "advanced",
    },
  ],
  fields: [
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      description: "Specify whether the link is to an internal or external URL, or to a file such as a PDF.",
      initialValue: "external",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External/custom", value: "external" },
          { title: "File", value: "file" },
        ],
        layout: "radio",
      },
      group: "link",
    }),
    defineField({
      name: "internal",
      title: "Internal Reference",
      type: "reference",
      to: schemaTypesWithPage.map((d) => ({
        type: d,
      })),
      // options: {
      //   filter: ({ document }) => {
      //     const language = document.language ? (document.language as string) : null;
      //     return {
      //       filter: addLanguageParamToFilter(DocumentFilters.AllDocumentsWithAPage),
      //       params: language
      //         ? {
      //             ...DocumentFilters.AllDocumentsWithAPage.params,
      //             language,
      //           }
      //         : DocumentFilters.AllDocumentsWithAPage.params,
      //     };
      //   },
      //   disableNew: true,
      // },
      hidden: ({ parent }) => {
        return parent?.linkType !== "internal";
      },
      group: "link",
    }),
    defineField({
      name: "external",
      title: "External URL",
      type: "string",
      description: "Use an absolute URL, email, telephone, or custom value with #",
      hidden: ({ parent }) => parent?.linkType !== "external",
      group: "link",
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
      hidden: ({ parent }) => parent?.linkType !== "file",
      group: "link",
    }),
    // {
    //   ...customAttributes,
    //   group: "advanced",
    // },
  ],
  preview: {
    select: {
      linkType: "linkType",
      title: "internal.title",
      breadcrumbTitle: "internal.docSettings.docBreadcrumbTitle",
      external: "external",
      filename: "file.asset.originalFilename",
    },
    // prepare(selection) {
    //   const { linkType, title, breadcrumbTitle, external, filename } = selection;
    //   let resolvedTitle = linkType;
    //   if (linkType === LinkType.External && external) {
    //     resolvedTitle = external;
    //   }
    //   if (linkType === LinkType.Internal) {
    //     resolvedTitle = breadcrumbTitle ? breadcrumbTitle : title;
    //   }
    //   if (linkType === LinkType.File) {
    //     resolvedTitle = filename;
    //   }

    //   return {
    //     title: resolvedTitle,
    //     subtitle: linkType.slice(0, 1).toUpperCase() + linkType.slice(1),
    //   };
    // },
  },
});

function isRelativeUrl(url: string) {
  return url.startsWith("/");
}
