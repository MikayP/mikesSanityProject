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
      columnContent[]{
        _key,
        _type,
        // heading block
        _type == "heading" => {
          level,
          text
        },
        // portable text block
      _type == "advancedText" => {
        content 
        },
          // image block
        _type == "imageField" => {
        borderRadius,
         maxHeight,
          asset->,
          alt
        }
      }
    }
  }
}
`;
