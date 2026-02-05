import { client } from "../../../studio/client";
import MainMenu from "../../components/layout/mainMenu";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

/* ----------------------------------
   GROQ query
---------------------------------- */
const blogPostQuery = groq`
  *[_type == "blogs" && slug.current == $slug][0]{
    title,
    subTitle,
    publishedDate,
     advancedText{
          content[]
        },
  }
`;

/* ----------------------------------
   Static params
---------------------------------- */
export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "blogs" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

/* ----------------------------------
   Page component
---------------------------------- */
type BlogSubPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogSubPage({ params }: BlogSubPageProps) {
   const { slug } = await params; // Await params
  
  const blog = await client.fetch(blogPostQuery, { slug });


  console.log("Blog data:", blog); // Debug log

  if (!blog) {
    return <div>Blog post not found</div>;
  }
  return (
    <>
      <MainMenu />

      <article className="max-w-3xl mx-auto container py-16">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        {blog.subTitle && (
          <p className="text-xl text-muted-foreground mb-6">
            {blog.subTitle}
          </p>
        )}

        <p className="text-sm text-gray-500 mb-10">
          {new Date(blog.publishedDate).toLocaleDateString()}
        </p>

        <PortableText value={blog.content} />
      </article>
    </>
  );
}
