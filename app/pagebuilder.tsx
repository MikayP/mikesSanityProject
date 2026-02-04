import Row from "./components/row";
import Hero from "./components/hero/hero";
import Card from "./components/layout/card";
import BlogList from "./components/blog/blogList";



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
        // console.log("Processing block:", block._type, block); // Add this
        switch (block._type) {
          case "hero":
            return (
              <Hero
                key={block._key ?? Math.random().toString(36)}
                hero={block}
              />
            );
          case "row":
            // console.log("Row block data:", JSON.stringify(block, null, 2));
            return (
              <Row
                key={block._key ?? Math.random().toString(36)}
                columns={block.contentBuilder}
                columnLayout={block.columnLayout}
                // Changed from spreading block
              />
            );

          case "blogList":  // Changed from "blog"
            return <BlogList key={block._key} blogList={block} />;

          default:
            return null;
        }
      })}
    </>
  );
}
