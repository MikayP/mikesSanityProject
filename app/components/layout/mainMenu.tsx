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
 
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-handwritten font-bold text-primary">
            alex ✨
          </a>
          <div className="hidden md:flex items-center gap-8">
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
          <button className="md:hidden text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    // <nav>
    //   <ul>
    //     {mainMenu.menuItems.map((item) => (
    //       <li key={item._key}>
    //         <a href={item.link?.external || '#'}>
    //           {item.title}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
}
