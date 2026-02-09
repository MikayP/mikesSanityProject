import { groq } from "next-sanity";

export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    "currentSlug": slug.current,
    seo{
      metaTitle,
      metaDescription,
      metaImage{
        asset->{
          url
        }
      }
    },

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
          internal->{
            slug
          },
          file{
            asset->
          }
        }
      }
    },

    pageBuilder[]{
      _key,
      _type,
      
      // Hero-specific fields (when _type is hero)
      _type == "hero" => {
        heading,
        subheading,
        heroStyle,
        advancedText{
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
        blobs,
        button[]{
          _key,
          _type,
          title,
          link{
            _type,
            linkType,
            external,
            internal->{
              slug
            },
            file{
              asset->
            }
          },
          style,
          targetBlank
        }
      },
      
      // Row-specific fields (when _type is row)
      _type == "row" => {
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
            cardBG,
            button{
              _key,
              _type,
              title,
              link{
                _type,
                linkType,
                external,
                internal->{
                  slug
                },
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
                  internal->{
                    slug
                  },
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
      }
    }
  }
`;