import Column from "./column";

type RowProps = {
  columns?: any[];
  
};

export default function Row({ columns }: RowProps) {

  // if (!columns?.length) {
  //   console.log("No columns in row");
  //   return null;
  // }
  // if (!columns?.length) return null;

 const gridColsMap: Record<string, string> = {
  '1': 'md:grid-cols-1',
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
  '4': 'md:grid-cols-4',
  '5': 'md:grid-cols-5',
  '6': 'md:grid-cols-6',
  '7': 'md:grid-cols-7',
  '8': 'md:grid-cols-8',
  '9': 'md:grid-cols-9',
  '10': 'md:grid-cols-10',
  '11': 'md:grid-cols-11',
  '12': 'md:grid-cols-12',
};

const gridClass = gridColsMap[columns?.[0]?.columnLayout] || 'md:grid-cols-2';

return (
  <section className="row">
    <div className={`grid grid-flow-row ${gridClass} gap-8 md:gap-20`}>
      {columns.map((column) => (
        <Column key={column._key} column={column} />
      ))}
    </div>
  </section>
);
}