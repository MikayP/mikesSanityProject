import Image from "next/image";
import { client } from "../studio/client";
import PageBuilder from "./pagebuilder";
import { pageQuery } from "./queries/pageQuery";
import MainMenu from "./components/layout/mainMenu";
import { getSiteSettings } from './queries/getSiteSettings';
import { generateMetadata as genMeta } from './queries/generateMetaData';
import { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {
  console.log("=== HOMEPAGE METADATA ===");
  
  const [data, settings] = await Promise.all([
    client.fetch(pageQuery, { slug: "/" }), // Or whatever your home slug is
    getSiteSettings(),
  ]);

  console.log("Data:", data);
  console.log("Settings:", settings);

  if (!data) {
    return {
      title: settings?.siteName || 'Home',
      description: settings?.defaultSeo?.metaDescription,
    };
  }

  return genMeta({
    title: data.title,
    seo: data.seo,
    defaultSeo: settings?.defaultSeo,
    siteName: settings?.siteName,
    siteUrl: settings?.siteUrl,
    path: '/',
  });
}

export default async function Page() {
  const data = await client.fetch(pageQuery, { slug: "/" }); // Match the slug above
  
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