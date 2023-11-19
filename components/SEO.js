import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="keywords" content='full-stack developer' />
      <meta property="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content='website' />
      <meta property="og:locale" content='en_US' />
    </Head>
  );
}
