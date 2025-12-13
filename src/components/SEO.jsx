import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Amrutam Ayurveda",
  description = "Discover Ayurvedic products, ingredients, doctors and community discussions.",
  canonical,
  image,
  children,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* OG tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      {children}
    </Helmet>
  );
}
