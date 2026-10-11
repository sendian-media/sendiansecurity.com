import {getSanityClient} from './client'
import type {NewsArticle, NewsArticleCard} from './types'

const newsArticleProjection = `{
  "id": slug.current,
  title,
  summary,
  publishedAt,
  category,
  body,
  "featuredImage": {
    "url": featuredImage.asset->url,
    "alt": featuredImage.alt
  },
  "articleImages": articleImages[]{
    "url": asset->url,
    "alt": alt
  },
  primaryKeyword,
  secondaryKeywords,
  "seo": {
    "title": seo.title,
    "description": seo.description,
    "imageUrl": seo.image.asset->url
  }
}`

const newsArticleCardsQuery = `*[_type == "newsArticle" && defined(slug.current)] | order(publishedAt desc) ${newsArticleProjection}`
const newsArticleBySlugQuery = `*[_type == "newsArticle" && slug.current == $slug][0] ${newsArticleProjection}`
const relatedNewsQuery = `*[_type == "newsArticle" && defined(slug.current) && category == $category && slug.current != $slug] | order(publishedAt desc)[0...$limit] ${newsArticleProjection}`
const relatedNewsFallbackQuery = `*[_type == "newsArticle" && defined(slug.current) && category != $category && slug.current != $slug] | order(publishedAt desc)[0...$limit] ${newsArticleProjection}`

export function getNewsArticles() {
  return getSanityClient().fetch<NewsArticleCard[]>(newsArticleCardsQuery)
}

export function getNewsArticle(slug: string) {
  return getSanityClient().fetch<NewsArticle | null>(newsArticleBySlugQuery, {slug})
}

export async function getRelatedNewsArticles(category: string, slug: string, limit = 3) {
  const client = getSanityClient()
  const related = await client.fetch<NewsArticleCard[]>(relatedNewsQuery, {category, slug, limit})

  if (related.length >= limit) return related

  const fallback = await client.fetch<NewsArticleCard[]>(relatedNewsFallbackQuery, {
    category,
    slug,
    limit: limit - related.length,
  })

  return [...related, ...fallback]
}
