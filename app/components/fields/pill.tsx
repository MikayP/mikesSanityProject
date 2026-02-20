import { urlFor } from "../fields/sanityImageUrl";

type PillProps = {
  pill: {
    _key: string;
    pills?: {
      pillImage?: any;
      pillStyle?: string;
      text?: string;
    }[];
  };
};

export default function Pill({ pill }: PillProps) {
  if (!pill?.pills) return null;


  const getPillStyles = (style?: string) => {
    switch (style) {
      case 'pill-plain-text':
        return 'px-4 py-2 rounded-full hover-lift bg-muted text-muted-foreground text-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default';
      case 'pill-grey-bg':
        return 'px-4 py-2 rounded-full hover-lift bg-primary text-primary-foreground text-md';
      default:
        return 'px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm';
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {pill.pills.map((item, index) => (
        <span key={index} className={getPillStyles(item.pillStyle)}>
          {item.pillImage && (
            <img 
              src={urlFor(item.pillImage).width(24).height(24).url()} 
              alt={item.pillImage.alt || ''} 
              className="inline-block w-6 h-6 mr-2"
            />
          )}
          {item.text || 'Pill'}
        </span>
      ))}
    </div>
  );
}