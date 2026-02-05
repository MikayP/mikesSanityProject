import { client } from "../../studio/client";
import PageBuilder from "../pagebuilder";
import MainMenu from "../components/layout/mainMenu";
import { pageQuery } from "../queries/pageQuery";
import BlogList from "../components/blog/blogList";

// In app/blog/page.tsx
export default async function BlogPage() {
  const data = await client.fetch(pageQuery, { slug: "blog" });

  if (!data) {
    return <div>Page not found - create a page with slug "blog" in Sanity</div>;
  }

  return (
    <>
      <MainMenu mainMenu={data.mainMenu} />
      <PageBuilder blocks={data.pageBuilder} />
      <BlogList />
    </>
  );
}
