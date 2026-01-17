import { ExternalLink } from 'lucide-react';
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

    const getButtonStyles = () => {
    switch (button.style) {
      case 'btn--sun':
        return 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:scale-105 shadow-lg hover:shadow-xl h-14 px-10 text-base';
      case 'btn--outline-grey':
        return 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-card text-foreground border border-border hover:border-primary hover:scale-105 shadow-sm h-14 px-10 text-base';
      case 'btn--plain':
        return 'text-primary hover:underline px-0';
      default:
        return 'inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline';
    }
  };
  return (
    
     <a href={getUrl()}
      target={button.targetBlank ? '_blank' : '_self'}
      rel={button.targetBlank ? 'noopener noreferrer' : undefined}
      className={getButtonStyles()}
    >
      {button.title}   {button.link?.linkType === 'external' && <ExternalLink size={16} />}
    </a>
  );
}