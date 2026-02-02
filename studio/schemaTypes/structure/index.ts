// ./structure/index.ts

import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Menu type first
      S.listItem()
        .title('Main Menu')
        .schemaType('mainMenu')
        .child(S.documentTypeList('mainMenu').title('Menus')),

      // Divider
      S.divider(),

      // Pages
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      S.listItem()
        .title('Blogs')
        .schemaType('blogs')
        .child(S.documentTypeList('blogs').title('Blogs')),

      //   Divider
      //   S.divider(),

      //   All other document types
      //   ...S.documentTypeListItems().filter(
      //     (listItem) => !['menu', 'page'].includes(listItem.getId() || '')
      //   ),
    ])
