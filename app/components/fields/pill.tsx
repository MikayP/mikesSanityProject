import { urlFor } from "../fields/sanityImageUrl";

type PillProps = {
  pill: {
    _key: string;
    pillImage?: any;
    pillStyle?: string;
    text?: string;
  };
};

export default function Pill({ pill }: PillProps) {
  if (!pill) return null;
  
  console.log("Pill data:", pill);

  const getPillStyles = () => {
    switch (pill.pillStyle) {
      case 'pill-grey-bg':
        return 'px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default';
      case 'pill-primary':
        return 'px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm';
      // Add more pill styles as needed
      default:
        return 'px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm';
    }
  };

  return (
    <span className={getPillStyles()}>
      {pill.pillImage && (
        <img 
          src={urlFor(pill.pillImage).width(24).height(24).url()} 
          alt={pill.pillImage.alt || ''} 
          className="inline-block w-4 h-4 mr-2"
        />
      )}
      {pill.text || 'Pill'}
    </span>
  );
}