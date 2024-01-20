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
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    </Head>
  );
}
