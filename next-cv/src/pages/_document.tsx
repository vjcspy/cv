import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Professional CV of Dinh Khoi, Solution Architect with 7+ years of full-stack development experience in high-traffic e-commerce and banking sectors. Expert in JavaScript, TypeScript, React, Angular, Node.js, and cloud technologies." />
        <meta name="keywords" content="Dinh Khoi, Solution Architect, Full Stack Developer, JavaScript, TypeScript, React, Angular, Node.js, E-commerce, Banking, Cloud Technologies, Software Engineer, CV, Resume" />
        <meta name="author" content="Dinh Khoi" />
        <meta property="og:title" content="Dinh Khoi - Solution Architect" />
        <meta property="og:description" content="Dinh Khoi, Solution Architect with 7+ years of full-stack development experience" />
        <meta property="og:type" content="profile" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}