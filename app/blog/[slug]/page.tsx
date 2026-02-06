import { client } from "../../../studio/client";
import MainMenu from "../../components/layout/mainMenu";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

/* ----------------------------------
   GROQ queries
---------------------------------- */
const blogPostQuery = groq`
  *[_type == "blogs" && slug.current == $slug][0]{
    title,
    subTitle,
    publishedDate,
    body{
      content
    }
  }
`;

const mainMenuQuery = groq`
  *[_type == "mainMenu"][0]{
    title,
    menuItems[]{
      _key,
      _type,
      title,
      link{
        _type,
        linkType,
        external,
        internal->,
        file{
          asset->
        }
      }
    }
  }
`;

/* ----------------------------------
   Static params
---------------------------------- */
export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "blogs" && defined(slug.current)]{
      "slug": slug.current
    }`,
  );

  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

/* ----------------------------------
   Page component
---------------------------------- */
type BlogSubPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogSubPage({ params }: BlogSubPageProps) {
  const { slug } = await params;

  const [blog, mainMenu] = await Promise.all([
    client.fetch(blogPostQuery, { slug }),
    client.fetch(mainMenuQuery),
  ]);

  console.log("Full blog object:", blog);
  console.log("advancedText:", blog?.advancedText);
  console.log("content array:", blog?.advancedText?.content);
  console.log(
    "Is content an array?",
    Array.isArray(blog?.advancedText?.content),
  );

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <MainMenu mainMenu={mainMenu} />

      <article className="max-w-3xl mx-auto container py-16">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        {blog.subTitle && (
          <p className="text-xl text-muted-foreground mb-6">{blog.subTitle}</p>
        )}

        {blog.publishedDate && (
          <p className="text-sm text-gray-500 mb-10">
            {new Date(blog.publishedDate).toLocaleDateString()}
          </p>
        )}

        <div className="prose max-w-none">
          {blog.body?.content ? (
            <PortableText value={blog.body.content} />
          ) : (
            <p>No content available - add content in Sanity Studio</p>
          )}
        </div>
      </article>
    </>
  );
}
