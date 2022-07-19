import Head from "next/head";

export default function Seo({
  seo = {
    titulo: "",
    descricao: "",
    favicon: { url: "" },
    url: "/",
    imagem: { url: "" },
    noIndex: false,
    palavrasChave: "",
  },
}) {
  return (
    <Head>
      <title>{seo.titulo}</title>
      <meta name="description" content={seo.descricao} />
      {seo.noIndex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <meta name="keywords" content={seo.palavrasChave} />
      <link rel="icon" type="image/png" href={seo.favicon?.url} />

      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_HOST + seo.url}
      />
      <meta property="og:title" content={seo.titulo} />
      <meta property="og:image" content={seo.imagem?.url} />
      <meta property="og:description" content={seo.descricao} />

      <meta
        name="twitter:url"
        content={process.env.NEXT_PUBLIC_HOST + seo.url}
      />
      <meta name="twitter:title" content={seo.titulo} />
      <meta name="twitter:image" content={seo.imagem?.url} />
      <meta name="twitter:description" content={seo.descricao} />

      <meta itemProp="url" content={process.env.NEXT_PUBLIC_HOST + seo.url} />
      <meta itemProp="name" content={seo.titulo} />
      <meta itemProp="image" content={seo.imagem?.url} />
      <meta itemProp="description" content={seo.descricao} />

      <link rel="canonical" href={process.env.NEXT_PUBLIC_HOST + seo.url} />
    </Head>
  );
}
