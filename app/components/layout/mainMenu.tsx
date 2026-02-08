"use client"; // Add this for useState

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type MainMenuProps = {
  mainMenu?: {
    _key: string;
    _type: string;
    title: string;
    menuItems?: Array<{
      _key: string;
      _type: string;
      title: string;
      link?: {
        _type: string;
        linkType: "internal" | "external" | "file";
        external?: string;
        internal?: any;
        file?: any;
      };
    }>;
  };
};

export default function MainMenu({ mainMenu }: MainMenuProps) {
  // console.log(mainMenu);

  if (!mainMenu?.menuItems) return null;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed sticky relative top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-handwritten font-bold text-primary"
          >
            Mike Portman ✨
          </a>
          <div
            className="
          hidden md:flex items-center gap-8"
          >
            {mainMenu.menuItems.map((item) => (
              <a
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                key={item._key}
                href={item.link?.external || "#"}
              >
                {item.title}
              </a>
            ))}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:scale-105 shadow-lg hover:shadow-xl h-9 px-4">
              Let's Chat! 💬
            </button>
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {mainMenu.menuItems.map((item) => (
                <a
                  key={item._key}
                  href={item.link?.external || "#"}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:scale-105 shadow-lg hover:shadow-xl h-9 px-4">
                Let's Chat! 💬
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
