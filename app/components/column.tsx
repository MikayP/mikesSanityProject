import Heading from "./textFields/heading";

type ColumnProps = {
  column: {
    column?: any[]; // Changed from content to column
  };
};

export default function Column({ column }: ColumnProps) {
  if (!column?.column?.length) return null;

  return (
    <div className="column">
      {column.column.map((block) => { // Changed from column.content
        switch (block._type) {
          case "heading":
            return <Heading key={block._key} {...block} />;

          // case "advancedText": // Changed from "text" to "advancedText"
          //   return <RichText key={block._key} value={block} />;

          // case "image":
          //   return <ImageBlock key={block._key} {...block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}