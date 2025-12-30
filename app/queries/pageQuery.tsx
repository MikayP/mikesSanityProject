import { groq } from "next-sanity";

export const pageQuery = groq`
*[_type == "page" && slug.current == "test-page-slug"][0]{
  title,
  "currentSlug": slug.current,
  pageBuilder[]{
    _key,
    _type,
    contentBuilder[]{
      _key,
      _type,
      colHorizontalAlign,
       colVerticalAlign,
       colTextAlign,
      column[]{
        _key,
        _type,
   
        // heading block
        _type == "heading" => {
          level,
          text
        },
        // advanced text block
        _type == "advancedText" => {
          text
        }
      }
    }
  }
}
`;