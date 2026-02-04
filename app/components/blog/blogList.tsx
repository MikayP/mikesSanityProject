import { client } from "../../../studio/client";
import { groq } from "next-sanity";
import Link from "next/link";

const blogsQuery = groq`
  *[_type == "blogs"] | order(publishedDate desc) {
    title,
    subTitle,
    "slug": slug.current,
    publishedDate
  }
`;

type BlogListProps = {
  blogList?: {
    title?: string;
    subTitle?: string;
  };
};

export default async function BlogList({ blogList }: BlogListProps) {
  const blogs = await client.fetch(blogsQuery);

  return (
    <section className="container-custom py-24">
      <h1 className="text-5xl font-bold mb-4">sfdsa</h1>
    </section>
  );
}
