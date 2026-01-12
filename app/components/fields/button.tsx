type ButtonProps = {
  button: {
    title: string;
    link?: {
      linkType: 'internal' | 'external' | 'file';
      external?: string;
      internal?: any;
      file?: any;
    };
    style?: string;
    targetBlank?: boolean;
  };
};

export default function Button({ button }: ButtonProps) {
  // Determine the URL based on link type
  const getUrl = () => {
    if (!button.link) return '#';
    
    switch (button.link.linkType) {
      case 'external':
        return button.link.external || '#';
      case 'internal':
        return button.link.internal?.slug?.current || '#';
      case 'file':
        return button.link.file?.asset?.url || '#';
      default:
        return '#';
    }
  };

  return (
    
     <a href={getUrl()}
      target={button.targetBlank ? '_blank' : '_self'}
      rel={button.targetBlank ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
        button.style === 'btn--sun' 
          ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105' 
          : 'border-2 border-foreground/20 hover:border-foreground/40 hover:scale-105'
      }`}
    >
      {button.title}
    </a>
  );
}