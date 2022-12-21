import * as React from "react";
import { Script } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetaData";
import favicon from "../images/favicon.ico";

export const Seo = ({ title, description, pathname, keywords, imageUrl="", children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeyWords,
    imageUrl: defaultImageUrl,
    author,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    url: `${siteUrl}${pathname ?? ""}`,
    keywords: `${defaultKeyWords}, ${keywords ?? ""} `,
    imageUrl: imageUrl ?? defaultImageUrl,
  };

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Oluwatobi Akanji",
    url: "https://oluwatobiakanji.com",
    sameAs: "https://www.linkedin.com/in/oluwatobiakanji/",
    jobTitle: "Software Engineer (Frontend Heavy)",
    email: "akanjioluwatobishadrach@yahoo.com",
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="robots" content="all" />
      <meta name="author" content={author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.imageUrl} />
      <meta name="application-name" content={structuredData.name} />
      <meta name="apple-mobile-web-app-title" content={structuredData.name} />
      <meta property="og:site_name" content={structuredData.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.imageUrl} />
      <meta property="og:locale" content="en_GB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
      <meta name="twitter:site" content="@AkanjiTobiS" />
      <meta name="twitter:site:id" content="3044639493" />
      <meta name="twitter:creator" content="@AkanjiTobiS" />
			<meta name="twitter:creator:id" content="3044639493" />
      <meta name="keywords" content={seo.keywords} />
      <link rel="icon" href={favicon} />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ _html: JSON.stringify(structuredData) }}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      {children}
    </>
  );
};
