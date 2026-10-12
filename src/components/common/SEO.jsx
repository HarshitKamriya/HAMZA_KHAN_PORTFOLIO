import { useEffect } from 'react';

/**
 * SEO — Sets document title, canonical link, OpenGraph, and Twitter card meta tags
 * 
 * @param {{
 *   title?: string,
 *   description?: string,
 *   canonicalPath?: string,
 *   ogImage?: string
 * }} props
 */
export default function SEO({
  title,
  description = 'Hamza Khan — Professional Speaker & Communication Coach. Turning complex ideas into clear, confident communication under pressure.',
  canonicalPath = '',
  ogImage = '/media/about-portrait.jpg'
}) {
  useEffect(() => {
    // 1. Title Tag
    const siteTitle = title ? `${title} | Hamza Khan` : 'Hamza Khan — Speaker & Communication Coach';
    document.title = siteTitle;

    // Helper to safely set or create a <meta> element
    const setMetaTag = (attrName, attrVal, contentVal) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', contentVal || '');
    };

    // 2. Meta Descriptions
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // 3. Canonical URL
    const origin = 'https://thehamzakhan.co';
    // Strip query parameters and hashes for canonicalization
    const cleanPath = canonicalPath.split('?')[0].split('#')[0];
    const canonicalUrl = `${origin}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Social OpenGraph & Twitter Tags
    setMetaTag('property', 'og:title', siteTitle);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', 'Hamza Khan');
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`;
    setMetaTag('property', 'og:image', fullOgImage);
    
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', siteTitle);
    setMetaTag('name', 'twitter:image', fullOgImage);
  }, [title, description, canonicalPath, ogImage]);

  return null;
}
