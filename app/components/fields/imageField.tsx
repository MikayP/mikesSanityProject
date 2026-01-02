import { urlFor } from './sanityImageUrl'; // Adjust path

type ImageProps = {
  imageField?: any;
};

export default function ImageField({ imageField }: ImageProps) {
  if (!imageField) return null;
  // console.log("ImageField data:", imageField);

  const styles = imageField.maxHeight 
 ? { maxHeight: `${imageField.maxHeight}px` } 
    : {};

  return (
    <img  className={` ${imageField.borderRadius ? 'rounded-lg' : ''} w-fit`}
          style={styles}
      src={urlFor(imageField).width(800).url()}
      alt={imageField.alt || 'Image'} 
    />
  );
}