import Column from "./column";
import Card from "../components/layout/card";

type RowProps = {
  columns?: any[];
  columnLayout?: string; // Add this
};

export default function Row({ columns, columnLayout }: RowProps) {
  const gridColsMap: Record<string, string> = {
    "1": "md:grid-cols-1",
    "2": "md:grid-cols-2",
    "3": "md:grid-cols-3",
    "4": "md:grid-cols-4",
    "5": "md:grid-cols-5",
    "6": "md:grid-cols-6",
    "7": "md:grid-cols-7",
    "8": "md:grid-cols-8",
    "9": "md:grid-cols-9",
    "10": "md:grid-cols-10",
    "11": "md:grid-cols-11",
    "12": "md:grid-cols-12",
  };

  const gridClass = gridColsMap[columnLayout] || "md:grid-cols-2";
  return (
    <section className="row">
      <div
        className={`grid ${gridClass} gap-8 md:gap-20 container-custom mx-auto px-6`}
      >
        {columns?.map((item) => {
          if (item._type === "card") {
            return <Card key={item._key} card={item} />;
          }
          return <Column key={item._key} column={item} />;
        })}
      </div>
    </section>
  );
}
