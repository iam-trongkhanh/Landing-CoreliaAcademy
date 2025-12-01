const siteConfig = {
  name: "Eduvet University",
  title:
    "Eduvet University - Top Educational Institution in NYC | Quality Education Since 1990",
  description:
    "Eduvet University is one of the most reputed educational institutions in NYC, offering quality education since 1990. Explore our programs in Social Science, Psychology, Sociology, and more. Join 7,000+ successful graduates.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://your-site-name.netlify.app", // Update with your actual domain after deployment
  ogImage: "/images/hero-student.jpg",
  twitterHandle: "@eduvetuniversity", // Update with your actual Twitter handle
  keywords: [
    "Eduvet University",
    "NYC university",
    "higher education",
    "social science programs",
    "psychology degree",
    "sociology courses",
    "quality education",
    "university in New York",
    "academic excellence",
    "student success",
    "educational institution",
    "university programs",
    "degree programs",
    "graduate programs",
  ],
};

export interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
}: MetadataProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const pageImage = image
    ? `${siteConfig.url}${image}`
    : `${siteConfig.url}${siteConfig.ogImage}`;
  const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add your verification codes here
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Eduvet University",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/hero-cap.svg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
      streetAddress: "12/A, New Booston Tower, NYC",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8-378-389-092",
      contactType: "Admissions",
      email: "contactinfo@gmail.com",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      // Add your social media links
      // "https://www.facebook.com/eduvet",
      // "https://www.twitter.com/eduvet",
      // "https://www.instagram.com/eduvet",
      // "https://www.youtube.com/eduvet",
    ],
    foundingDate: "1990",
    numberOfStudents: "7000+",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export { siteConfig };

