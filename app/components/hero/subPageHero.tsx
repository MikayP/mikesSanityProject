// heroVariants/SubPageHero.tsx
export default function SubPageHero({ hero }) {
  return (
    <section className="sub-page-hero">
      <h2>{hero.heading} subpage hero</h2>
      <p>{hero.subheading}</p>
      {/* Different layout */}
    </section>
  );
}
