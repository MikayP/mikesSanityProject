export default function Hero({ hero }) {

  // if (!columns?.length) {
  //   console.log("No columns in row");
  //   return null;
  // }
  // if (!columns?.length) return null;
    console.log(hero);

return (


  <section className="row">
    <div className={`grid grid-flow-row gap-8 md:gap-20`}>
      {/* {columns.map((column) => (
        <Column key={column._key} column={column} />
      ))} */}
    </div>
  </section>
);
}