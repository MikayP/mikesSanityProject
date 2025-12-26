
type RowProps = {
  title?: string
  rowContent: any[]
  backgroundColor?: string
  currentSlug?: string
}

export function Row({
  title,
  rowContent,
  backgroundColor,
  currentSlug,
}: RowProps) {
  return (
    <section
      style={{ backgroundColor }}
      data-slug={currentSlug}
      className="row"
    >
      {title && <h2>{title}</h2>}

      <div className="row-content">
        {rowContent.map((block) => (
          <div key={block._key}>
            {/* Render blocks here */}
            {block.title && <h3>{block.title}</h3>}
          </div>
        ))}
      </div>
    </section>
  )
}
