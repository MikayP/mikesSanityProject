import { groq } from "next-sanity";

export const innerRowQuery = `
  title,
  columnLayout,
  contentBuilder[]{
    _key,
    _type,
    
    // Card fields (when _type is card)
    _type == "card" => {
      heading,
      text,
      pills,
      cardStyle,
      image{
        asset->,
        alt,
      },
      button{
        _key,
        _type,
        title,
        link{
          _type,
          linkType,
          external,
          internal->{ slug{ current } },
          file{
            asset->
          }
        },
        style,
        targetBlank
      }
    },
    
    // Column fields (when _type is column)
    _type == "column" => {
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
          content[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                linkType,
                external,
                internal->{ slug{ current } },
                file{
                  asset->{
                    url
                  }
                }
              }
            }
          }
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
            internal->{ slug{ current } },
            file{
              asset->
            }
          },
          style,
          targetBlank
        },
        _type == "form" => {
          formTitle,
          buttonStyle,
          formCTA
        },
        _type == "blogs" => {
          title,
          subTitle
        }
      }
    }
  }
`;