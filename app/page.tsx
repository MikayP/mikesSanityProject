import Image from "next/image";
import { client } from "../studio/client";
import PageBuilder from "./pagebuilder";
import { pageQuery } from "./queries/pageQuery";
import MainMenu from "./components/layout/mainMenu";

export default async function Page() {
  const data = await client.fetch(pageQuery, {
    slug: "/",
  });
    if (!data) {
    return <div>Page not found</div>;
  }

  return (
       <>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <MainMenu mainMenu={data.mainMenu} />
        <PageBuilder blocks={data.pageBuilder} />
  </>
  )
  ;
}