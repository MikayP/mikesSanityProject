// utils/linkHelpers.ts
export const getLinkUrl = (link: any) => {
  if (!link) return "#";

  switch (link.linkType) {
    case "external":
      const externalUrl = link.external || "#";
      // Ensure external links have a protocol
      if (
        externalUrl !== "#" &&
        !externalUrl.startsWith("http://") &&
        !externalUrl.startsWith("https://")
      ) {
        return `https://${externalUrl}`;
      }
      return link.external || "#";
    case "internal":
      return link.internal?.slug?.current || "#";
    case "file":
      return link.file?.asset?.url || "#";
    default:
      return "#";
  }
};
