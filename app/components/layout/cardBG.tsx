import Button from "../fields/button";

export default function CardBG({ card }) {
  if (!card) return null;

  // const PortfolioSection = () => {
  //   const portfolio = [
  //     {
  //       title: "Coffee Finder",
  //       description: "Find the best coffee spots nearby",
  //       tags: ["React", "Maps API"],
  //       thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  //       url: "#",
  //     },
  //   ];
  return (
    <section id="portfolio" className="relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto grid ">
          <a
            key={index}
            href={card.button}
            className="group relative rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover-lift aspect-[3/2]"
          >
            {/* Thumbnail Background */}
            <img
              // src={item.thumbnail}
              alt={`${card.title} website screenshot`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/80 transition-all duration-300" />
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {card.pills?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs font-medium text-primary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
