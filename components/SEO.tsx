import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object; // New prop for page-specific structured data
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Crafting excellence in interior architecture and civil construction. Powered by MBSYS engineering precision.",
  image = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
  url = "https://hunar.mbsys.co.in",
  type = "website",
  schema
}) => {
  const siteName = "HUNAR";
  const displayTitle = title ? `${title} | ${siteName}` : `${siteName} | Premium Interiors & Civil Construction`;

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HUNAR Architecture & Construction",
    "image": image,
    "@id": "https://hunar.mbsys.co.in",
    "url": "https://hunar.mbsys.co.in",
    "telephone": "+91 98863 74122",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "231, Zamann Manzil, 3rd Main Road, Ilyas Nagar, J.P. Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "KA",
      "postalCode": "560111",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9066667,
      "longitude": 77.5685162
    }
  };

  return (
    <Helmet>
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Social / OG */}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || baseSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
