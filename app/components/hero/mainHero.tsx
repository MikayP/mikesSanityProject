// heroVariants/MainHero.tsx
export default function MainHero({ hero }) {
  return (
    <section className="main-hero">
      <h1>{hero.heading} main hero</h1>
      <p>{hero.subheading}</p>
      {/* Render buttons */}
    </section>
  );
}
