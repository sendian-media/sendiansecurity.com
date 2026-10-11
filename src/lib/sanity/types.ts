import type {PortableTextBlock} from '@portabletext/types';

export interface SiteSettings {
  name: string;
  description?: string;
  email?: string;
  phone?: string;
}

export interface NewsImage {
  url: string;
  alt: string;
}

export interface NewsSeo {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export interface NewsArticleCard {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
  featuredImage: NewsImage;
  articleImages?: NewsImage[];
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  seo?: NewsSeo;
}

export interface NewsArticle extends NewsArticleCard {
  body: PortableTextBlock[];
}
