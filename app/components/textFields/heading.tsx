type HeadingProps = {
  level?: number;
  text?: string;
};

export default function Heading({ level, text }: HeadingProps) {

  const Tag = `h${level}` as any;

  return <Tag>{text}</Tag>;
}
