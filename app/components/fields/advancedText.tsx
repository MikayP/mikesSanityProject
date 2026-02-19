import { PortableText } from "@portabletext/react";
import "../../../styles/sass/components/advancedText.scss";

type AdvancedTextProps = {
  content?: any[];
};

const customComponents = {
  // Marks (inline annotations like links, bold, italic)
  marks: {
    left: ({ children }: any) => <div className="text-left">{children}</div>,
    center: ({ children }: any) => (<div className="text-center w-full">{children}</div>
    ),
    right: ({ children }: any) => <div className="text-right">{children}</div>,
    link: ({ value, children }) => {
      const { linkType, internal, external, file } = value;

      let href = "#";

      if (linkType === "external") {
        href = external || "#";
      } else if (linkType === "internal") {
        href = `/${internal?.slug?.current || ""}`;
      } else if (linkType === "file") {
        href = file?.asset?.url || "#";
      }
      return (
        <a
          href={href}
          className="text-primary hover:underline transition-colors"
          target={linkType === "external" ? "_blank" : undefined}
          rel={linkType === "external" ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default function AdvancedText({ content }: AdvancedTextProps) {
  if (!content) return null;

  return (
    <div className="portable-text prose">
      <PortableText value={content} components={customComponents} />
    </div>
  );
}
