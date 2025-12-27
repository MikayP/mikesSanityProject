import Column from "./column";

type RowProps = {
  columns?: any[];
};

export default function Row({ columns }: RowProps) {
  if (!columns?.length) return null;

  return (
    <section className="row">
      <div className="row__grid">
        {columns.map((column) => (
          <Column key={column._key} column={column} />
        ))}
      </div>
    </section>
  );
}
