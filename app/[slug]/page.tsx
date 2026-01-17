import { client } from "../../studio/client";
import PageBuilder from "../pagebuilder";
import MainMenu from "../components/layout/mainMenu";
import { pageQuery } from "../queries/pageQuery";


export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Add this line
  const data = await client.fetch(pageQuery, { slug }); // Use destructured slug


  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <MainMenu mainMenu={data.mainMenu} />
      <PageBuilder blocks={data.pageBuilder} />
    </>
  );
}