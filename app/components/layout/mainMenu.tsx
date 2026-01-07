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
        linkType: 'internal' | 'external' | 'file';
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
    <nav>
      <ul>
        {mainMenu.menuItems.map((item) => (
          <li key={item._key}>
            <a href={item.link?.external || '#'}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}