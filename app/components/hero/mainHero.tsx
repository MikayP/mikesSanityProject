import { PortableText } from "@portabletext/react";
import Blobs from "../fields/blobs";
export default function MainHero({ hero }) {
  // console.log("Hero data:", hero);
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-20">
      {/* Decorative blobs */}

      {hero.blobs && <Blobs />}
      {/* Sparkles decoration */}
      <div className="absolute top-40 right-1/4 text-accent animate-wiggle">
        {/* <Sparkles size={32} /> */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          {/* <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-6xl animate-wave">👋</span>
          </div> */}

          {/* Main heading */}
          <div
            className="text-5xl md:text-7xl font-bold leading-tight mt-6 mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {hero.advancedText?.content && (
              <PortableText value={hero.advancedText.content} />
            )}
          </div>

          {/* Subtitle */}
          <p
            className="text-2xl md:text-3xl text-muted-foreground mb-6 font-handwritten animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {hero.subheading}
          </p>

          {/* Fun facts badges */}
          {/* <div 
            className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Coffee, label: "Coffee addict", color: "bg-primary/10 text-primary" },
              { icon: Music, label: "Playlist curator", color: "bg-accent/30 text-accent-foreground" },
              { icon: Heart, label: "Dog person", color: "bg-secondary text-secondary-foreground" },
            ].map((badge, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${badge.color} hover-lift cursor-default`}
              >
                <badge.icon size={16} />
                {badge.label}
              </span>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {/* <Button variant="fun" size="lg" asChild>
              <a href="#about">Get to know me ✨</a>
            </Button>
            <Button variant="soft" size="lg" asChild>
              <a href="#projects">See my work</a>
            </Button> */}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-handwritten">scroll down!</span>
            {/* <ArrowDown size={20} /> */}
          </a>
        </div>
      </div>
    </section>
  );
}
