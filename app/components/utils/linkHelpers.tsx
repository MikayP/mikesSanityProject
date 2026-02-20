// utils/linkHelpers.ts
export const getLinkUrl = (link: any) => {
  if (!link) return "#";

  switch (link.linkType) {
    case "external":
      const externalUrl = link.external || "#";
      
      // Don't modify anchor links or links that already have a protocol
      if (
        externalUrl === "#" ||
        externalUrl.startsWith("#") ||
        externalUrl.startsWith("http://") ||
        externalUrl.startsWith("https://")
      ) {
        return externalUrl;
      }
      
      // Add https:// to external URLs without a protocol
      return `https://${externalUrl}`;
      
    case "internal":
      return link.internal?.slug?.current ? `/${link.internal.slug.current}` : "#";
      
    case "file":
      return link.file?.asset?.url || "#";
      
    default:
      return "#";
  }
};