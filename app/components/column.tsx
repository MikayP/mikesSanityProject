import Heading from "./fields/heading";

type ColumnProps = {
  column: {
    column?: any[];
    colHorizontalAlign?: string; // Add this to the type
    colVerticalAlign?: string;
    colTextAlign?: string;
  };
};

export default function Column({ column }: ColumnProps) {
  if (!column?.column?.length) return null;
  console.log("Column data:", column);
  return (
    <div className={`py-8 column ${column.colHorizontalAlign || ""} ${column.colVerticalAlign || ""} ${column.colTextAlign || ""}`}>
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
