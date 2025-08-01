import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Professional CV of Jill Morgan, experienced Marketing Manager with 8+ years in digital marketing, content strategy, and team leadership. View my experience, skills, and achievements." />
        <meta name="keywords" content="Jill Morgan, Marketing Manager, Digital Marketing, Content Strategy, SEO, Team Leadership, Professional CV, Resume" />
        <meta name="author" content="Jill Morgan" />
        <meta property="og:title" content="Jill Morgan - Marketing Manager" />
        <meta property="og:description" content="Professional CV showcasing 8+ years of marketing experience and proven track record in digital campaigns and team leadership." />
        <meta property="og:type" content="profile" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}