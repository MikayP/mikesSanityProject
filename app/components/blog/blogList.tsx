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

export default async function BlogList() {
  const blogs = await client.fetch(blogsQuery);

  return (
    <section className="max-w-3xl mx-auto container">
      {blogs.map((blog: any, index: number) => {
        const gradientIndex = (index % 4) + 1;
        console.log(gradientIndex);

        return (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div className={`mb-12 bg-gradient-${gradientIndex}`}>
              <h2 className="text-3xl font-bold">{blog.title}</h2>
              <p className="text-lg text-muted-foreground">
                {blog.subTitle}
              </p>
              <p className="text-sm text-gray-500">
                Published on{" "}
                {new Date(blog.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
