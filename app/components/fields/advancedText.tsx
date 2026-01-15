import { PortableText } from '@portabletext/react';
import "../../../styles/sass/components/advancedText.scss";

type AdvancedTextProps = {
  content?: any[];
};

export default function AdvancedText({ content }: AdvancedTextProps) {
  if (!content) return null;
  // console.log("AdvancedText content:", content);
  return (
    <div className="portable-text">
      <PortableText value={content} />
    </div>
  );
}