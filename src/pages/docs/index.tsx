import Link from "next/link";
import Seo from "../../components/Seo";
// import { getDocs, getSeo } from "../../lib/api";
import { Container } from "../../components/docs";

export default function Docs({ seo, docs }) {
  return (
    <Container>
      <Seo
        seo={{
          ...seo,
          titulo: `Documentos Legais - ${seo?.titulo}`,
          url: "/docs",
          noIndex: true,
        }}
      />
      <Link href="/" passHref>
        <a className="back">
          <p className="icon">
            <span className="material-symbols-rounded">arrow_back_ios</span>
          </p>
          <p>Voltar para XXXXXXXXXXXXXXXXXXXX</p>
        </a>
      </Link>
      <article>
        <h1 style={{ textAlign: "center" }}>Documentos Legais</h1>
      </article>
      {/* <div className="docs">
        {docs.map((doc) => (
          <Link href={`/docs/${doc.slug}`} key={doc.slug} passHref>
            <a>{doc.titulo}</a>
          </Link>
        ))}
      </div> */}
    </Container>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       seo: await getSeo(),
//       docs: await getDocs(),
//     },
//     revalidate: 100,
//   };
// }
