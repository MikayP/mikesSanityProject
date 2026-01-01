import Heading from "./fields/heading";
import ImageField from "./fields/imageField";
import AdvancedText from "./fields/advancedText";

type ColumnProps = {
  column: {
    column?: any[];
    colHorizontalAlign?: string; // Add this to the type
    colVerticalAlign?: string;
    colTextAlign?: string;
  };
};

export default function Column({ column }: ColumnProps) {
  // console.log("1. Column component rendered");
  // console.log("2. Column data:", column);
  // console.log("3. column.column array:", column?.column);

  if (!column?.column?.length) {
    // console.log("4. Returning null - no column data");
    return null;
  }

  return ( 
    <div
      className={`py-8 column ${column.colHorizontalAlign || ""} ${column.colVerticalAlign || ""} ${column.colTextAlign || ""}`}
    >
      {column.column.map((block, index) => {
        // console.log(`5. Block ${index}:`, block);
        // console.log(`6. Block type:`, block._type);

        switch (block._type) {
          case "heading":
            // remember it's the type, not the name
            // console.log("7. Rendering heading");
            return <Heading key={block._key} {...block} />;
          case "image":
            // console.log("8. Rendering imageField");
            return <ImageField key={block._key} imageField={block} />;
          case "AdvancedText":
            return <AdvancedText key={block._key} content={block.content} />;
          default:
            // console.log("9. Unknown block type:", block._type);
            return null;
        }
      })}
    </div>
  );
}
