import { groq } from "next-sanity";

export const pageQuery = groq`
  *[_type == "page" && slug.current == "test-page-slug"][0]{
    title,
    "currentSlug": slug.current,

    "mainMenu": *[_type == "mainMenu"][0]{
      title,
      menuItems[]{
        _key,
        _type,
        title,
        link{
          _type,
          linkType,
          external,
          internal->,
          file{
            asset->
          }
        }
      }
    },

    pageBuilder[]{
      _key,
      _type,
      
      // Fetch ALL fields at this level, not just inside contentBuilder
      ...,
      
      // Hero-specific fields (when _type is hero)
      _type == "hero" => {
        heading,
        subheading,
        heroStyle,
        advancedText{  // Just fetch it directly, no nested conditional
          content
        },

        subheading,
        heroStyle,
        buttons[]{
          _key,
          _type,
          title,
          link{
            _type,
            linkType,
            external,
            internal->,
            file{
              asset->
            }
          },
          style,
          targetBlank
        }
      },
      
      // ContentBuilder fields (when _type is row or similar)
      contentBuilder[]{
        _key,
        _type,
        colHorizontalAlign,
        colVerticalAlign,
        colTextAlign,
        columnLayout,
        columnContent[]{
          _key,
          _type,
          _type == "heading" => {
            level,
            text
          },
          _type == "advancedText" => {
            content
          },
          _type == "imageField" => {
            borderRadius,
            maxHeight,
            asset->,
            alt
          },
          _type == "button" => {
            title,
            link{
              _type,
              linkType,
              external,
              internal->,
              file{
                asset->
              }
            },
            style,
            targetBlank
          }
        }
      }
    }
  }
`;