import { urlFor } from './sanityImageUrl'; // Adjust path

type ImageProps = {
  imageField?: any;
};

export default function ImageField({ imageField }: ImageProps) {
  if (!imageField) return null;
  
  return (
    <img 
      src={urlFor(imageField).width(800).url()}
      alt={imageField.alt || 'Image'} 
    />
  );
}