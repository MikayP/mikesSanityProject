// heroVariants/SubPageHero.tsx
type BlobsProps = {
  blobs?: any; // Add the ? to make it optional
};

export default function Blobs({ blobs }: BlobsProps) {
  return (
    <div>
    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 blob animate-float-slow" />
      <div
        className="absolute bottom-20 left-10 w-56 h-56 bg-accent/30 blob-2 animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-secondary/50 rounded-full animate-bounce-soft"
        style={{ animationDelay: "1s" }}
      />
    </div>
  

  );
}
