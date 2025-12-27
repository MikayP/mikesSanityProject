import Row from "./components/row";


export default function PageBuilder({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block) => { 
    switch (block._type) {

      case "row":

        return <Row key={block._key} {...block} />;


      default:
        return null;
    }
  });
}
