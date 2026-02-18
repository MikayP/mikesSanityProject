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
  
  console.log("Pill data:", pill);

  const getPillStyles = (style?: string) => {
    switch (style) {
      case 'pill-grey-bg':
        return 'px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default';
      case 'pill-plain-text':
        return 'px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm';
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
              className="inline-block w-4 h-4 mr-2"
            />
          )}
          {item.text || 'Pill'}
        </span>
      ))}
    </div>
  );
}