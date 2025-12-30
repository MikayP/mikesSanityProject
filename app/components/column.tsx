import Heading from "./textFields/heading";

type ColumnProps = {
  column: {
    column?: any[];
    colHorizontalAlign?: string; // Add this to the type
  };
};

export default function Column({ column }: ColumnProps) {
  if (!column?.column?.length) return null;

  return (
    <div className={`column ${column.colHorizontalAlign || ""}`}>
      {column.column.map((block) => {
        switch (block._type) {
          case "heading":
            return <Heading key={block._key} {...block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
