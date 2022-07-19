import Link from "next/link";
import Seo from "../../components/Seo";
import { Container } from "../../components/docs";
// import { getDocs, getSeo } from "../../lib/api";
import Markdown from "markdown-to-jsx";

export default function DocsInterna({ seo, doc }) {
  return (
    <Container>
      {/* <Seo
        seo={{
          ...seo,
          titulo: `Documentos Legais - ${seo.titulo}`,
          url: "/docs",
          noIndex: true,
        }}
      />
      <Link href="/docs/" passHref>
        <a className="back">
          <p className="icon">
            <span className="material-symbols-rounded">arrow_back_ios</span>
          </p>
          <p>Voltar para Documentos Legais</p>
        </a>
      </Link>
      <article>
        <h1>{doc.titulo}</h1>
      </article>
      <Markdown options={{ wrapper: "article", forceWrapper: true }}>
        {doc.texto.markdown}
      </Markdown> */}
    </Container>
  );
}

// export async function getStaticPaths() {
//   const docs = await getDocs();
//   return {
//     paths: docs.map((doc) => ({
//       params: { slug: doc.slug },
//     })),
//     fallback: "blocking",
//   };
// }

// export async function getStaticProps({ params }) {
//   return {
//     props: {
//       seo: await getSeo(),
//       doc: (await getDocs()).find((doc) => doc.slug === params.slug),
//     },
//     revalidate: 100,
//   };
// }
