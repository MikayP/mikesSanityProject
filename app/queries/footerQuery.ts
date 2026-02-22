export const footerQuery = `
  title,
  advancedText{
    content[]
  },
  footerItems[]{
    _key,
    _type,
    title,
    link{
      _type,
      linkType,
      external,
      openInNewTab,
      internal->{ slug{ current } },
      file{
        asset->{
          url
        }
      }
    }
  }
`;