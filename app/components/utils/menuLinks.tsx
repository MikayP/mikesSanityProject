// components/layout/menuLinks.tsx
type MenuLink = {
  _key: string;
  _type: string;
  title: string;
  link?: {
    _type: string;
    linkType: "internal" | "external" | "file";
    external?: string;
    openInNewTab?: boolean;
    internal?: {
      slug?: {
        current: string;
      };
    };
    file?: any;
  };
};

type MenuLinksProps = {
  items: MenuLink[];
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function MenuLinks({ 
  items, 
  className = "", 
  linkClassName = "",
  onLinkClick 
}: MenuLinksProps) {
  const getHref = (item: MenuLink) => {
    if (!item.link) return "#";

    if (item.link.linkType === "external") {
      return item.link.external || "#";
    }

    if (item.link.linkType === "internal") {
      return `/${item.link.internal?.slug?.current || ""}`;
    }

    return "#";
  };

  return (
    <nav className={className}>
      {items.map((item) => (
        <a
          key={item._key}
          href={getHref(item)}
          className={linkClassName}
          onClick={onLinkClick}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}