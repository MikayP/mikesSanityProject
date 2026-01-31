import { PortableText } from "@portabletext/react";
import "../../../styles/sass/components/advancedText.scss";

type AdvancedTextProps = {
  content?: any[];
};
const customComponents = {
  // Block-level elements (paragraphs, headings, blockquotes)
  block: {
    normal: ({ children }) => (
      <p className="text-lg mb-4">{children}</p>
    ),
    h2: ({children}) => <h2 className="text-4xl font-bold mb-5 mt-7">{children}</h2>,
  }
};
export default function AdvancedText({ content }: AdvancedTextProps) {
  if (!content) return null;

  return (
    <div className="portable-text prose ">
      <PortableText value={content} 
      components={customComponents} />
    </div>
  );
}
