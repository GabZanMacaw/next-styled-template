import Seo from "../components/Seo";
// import { getContato, getSeo, getSite, getDocs } from "../lib/api";

export default function Home({ seo, site, contato, portfolio, docs }) {
  return (
    <>
      <Seo seo={seo} />
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       contato: await getContato(),
//       seo: await getSeo(),
//       site: await getSite(),
//       docs: await getDocs(),
//     },
//     revalidate: 100,
//   };
// }
