import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Professional CV of Dinh Khoi, Solution Architect | Full Stack Engineer with 10+ years of backend development experience in high-traffic e-commerce and banking sectors. Expert in Node.js, TypeScript, Java, and microservices architecture." />
        <meta name="keywords" content="Dinh Khoi, Solution Architect, Full Stack Engineer, Node.js, TypeScript, Java, Microservices, React, Angular, E-commerce, Banking, AWS, Kubernetes, CV, Resume" />
        <meta name="author" content="Dinh Khoi" />
        <meta property="og:title" content="Dinh Khoi - Solution Architect | Full Stack Engineer" />
        <meta property="og:description" content="Dinh Khoi, Solution Architect | Full Stack Engineer with 10+ years of backend development experience in high-traffic e-commerce and banking sectors" />
        <meta property="og:type" content="profile" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}