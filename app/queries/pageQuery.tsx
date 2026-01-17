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
      
      // Fetch ALL fields at this level
      ...,
      
      // Hero-specific fields (when _type is hero)
      _type == "hero" => {
        heading,
        subheading,
        heroStyle,
        advancedText{
          content
        },
        blobs,
        button[]{
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
      
      // ContentBuilder fields (when _type is row)
      contentBuilder[]{
        _key,
        _type,
        
        // Card fields (when _type is card)
        _type == "card" => {
          heading,
          text,
          pills,
          cardBG,
          button{
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
        
        // Column fields (when _type is column)
        colHorizontalAlign,
        colVerticalAlign,
        colTextAlign,
        columnLayout,
        customClass,
        columnStyle,
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