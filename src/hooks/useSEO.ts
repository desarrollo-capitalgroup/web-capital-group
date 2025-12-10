import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
}

const useSEO = ({
  title,
  description,
  keywords,
  ogImage,
  url,
  type = 'website'
}: SEOProps): void => {
  useEffect(() => {
    // Guardar el título original
    const originalTitle = document.title;
    
    // Actualizar título
    if (title) {
      document.title = title;
    }

    // Función helper para actualizar o crear meta tags
    const updateMetaTag = (selector: string, attribute: string, attributeValue: string, content: string): void => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Meta Description
    if (description) {
      updateMetaTag(
        'meta[name="description"]',
        'name',
        'description',
        description
      );
    }

    // Meta Keywords
    if (keywords) {
      updateMetaTag(
        'meta[name="keywords"]',
        'name',
        'keywords',
        keywords
      );
    }

    // Open Graph Tags
    if (title) {
      updateMetaTag(
        'meta[property="og:title"]',
        'property',
        'og:title',
        title
      );
    }

    if (description) {
      updateMetaTag(
        'meta[property="og:description"]',
        'property',
        'og:description',
        description
      );
    }

    if (type) {
      updateMetaTag(
        'meta[property="og:type"]',
        'property',
        'og:type',
        type
      );
    }

    if (url) {
      updateMetaTag(
        'meta[property="og:url"]',
        'property',
        'og:url',
        url
      );
    }

    if (ogImage) {
      updateMetaTag(
        'meta[property="og:image"]',
        'property',
        'og:image',
        ogImage
      );
    }

    // Twitter Card
    updateMetaTag(
      'meta[name="twitter:card"]',
      'name',
      'twitter:card',
      'summary_large_image'
    );

    if (title) {
      updateMetaTag(
        'meta[name="twitter:title"]',
        'name',
        'twitter:title',
        title
      );
    }

    if (description) {
      updateMetaTag(
        'meta[name="twitter:description"]',
        'name',
        'twitter:description',
        description
      );
    }

    if (ogImage) {
      updateMetaTag(
        'meta[name="twitter:image"]',
        'name',
        'twitter:image',
        ogImage
      );
    }

    // Canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    }

    // Language
    document.documentElement.lang = 'es-MX';

    // Cleanup function
    return () => {
      document.title = originalTitle;
    };
  }, [title, description, keywords, ogImage, url, type]);
};

export default useSEO;