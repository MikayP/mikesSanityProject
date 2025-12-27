type ColumnProps = {
  column: {
    content?: any[];
  };
};

export default function Column({ column }: ColumnProps) {


  return (
    <div className="column">
        <p>123</p>
      {/* {column.content.map((block) => {
        switch (block._type) {
          case "heading":
            return <Heading key={block._key} {...block} />;

          case "text":
            return <RichText key={block._key} value={block} />;

          case "image":
            return <ImageBlock key={block._key} {...block} />;

          default:
            return null;
        }
      })} */}
    </div>
  );
}