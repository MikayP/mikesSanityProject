import { client } from "../../studio/client";
import PageBuilder from "../pagebuilder";
import MainMenu from "../components/layout/mainMenu";
import { pageQuery } from "../queries/pageQuery";

export default async function BlogPage() {
  const data = await client.fetch(pageQuery, { slug: "blog" }); // Fetch the "blog" page

  return (
    <>
      <MainMenu mainMenu={data.mainMenu} />
      <PageBuilder blocks={data.pageBuilder} />
    </>
  );
}