import Row from "./components/row";

export default function PageBuilder({ blocks }) {
  // console.log("PageBuilder blocks:", blocks);
  // console.log("Is array?", Array.isArray(blocks));
  // console.log("Length:", blocks?.length);

  // if (!Array.isArray(blocks) || !blocks.length) {
  //   console.log("Returning null - no blocks");
  //   return null;
  // }
  // if (!Array.isArray(blocks) || !blocks.length) return null;

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case "row":
            // console.log("Row block data:", JSON.stringify(block, null, 2));
            return (
              <Row
                key={block._key ?? Math.random().toString(36)}
                columns={block.contentBuilder} // Changed from spreading block
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
