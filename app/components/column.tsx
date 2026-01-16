import Heading from "./fields/heading";
import ImageField from "./fields/imageField";
import AdvancedText from "./fields/advancedText";
import Button from "./fields/button";

type ColumnProps = {
  column: {
    columnContent?: any[];
    customClass?: string;
    card?: string;
    colHorizontalAlign?: string; // Add this to the type
    colVerticalAlign?: string;
    colTextAlign?: string;
  };
};

export default function Column({ column }: ColumnProps) {
  // console.log("1. Column component rendered");
  // console.log("2. Column data:", column);
  // console.log("3. column.column array:", column?.column);

  if (!column?.columnContent?.length) {
    // console.log("4. Returning null - no column data");
    return null;
  }

  const customClass = column.customClass || "";

  // Define shadowCard class conditionally
  const shadowCard = column.card === "shadow" 
    ? "bg-card border border-border md:p-12 p-8 rounded-3xl shadow-soft gap-8" 
    : "";
  return (
    <div
      className={`py-8 column flex flex-col ${shadowCard} ${customClass} ${column.colHorizontalAlign || ""} ${column.colVerticalAlign || ""} ${column.colTextAlign || ""}`}
    >
      {column.columnContent.map((block, index) => {
        // console.log(`5. Block ${index}:`, block);
        // console.log(`6. Block type:`, block._type);

        switch (block._type) {
          case "heading":
            // remember it's the type, not the name
            // console.log("7. Rendering heading");
            return <Heading key={block._key} {...block} />;
          case "imageField":
            // console.log("8. Rendering imageField");
            return <ImageField key={block._key} imageField={block} />;
          case "advancedText":
            return <AdvancedText key={block._key} content={block.content} />;
          case "button":
            return <Button key={block._key}  button={block} />;
          default:
            // console.log("9. Unknown block type:", block._type);
            return null;
        }
      })}
    </div>
  );
}
