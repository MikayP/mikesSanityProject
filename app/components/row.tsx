import Column from "./column";

type RowProps = {
  columns?: any[];
};

export default function Row({ columns }: RowProps) {
  //   console.log("Row columns:", columns);

  // if (!columns?.length) {
  //   console.log("No columns in row");
  //   return null;
  // }
  // if (!columns?.length) return null;

  return (
    <section className="row">
      <div className="grid grid-flow-col grid-cols-2 gap-4">
        {columns.map((column) => (
          <Column key={column._key} column={column} />
        ))}
      </div>
    </section>
  );
}
