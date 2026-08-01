import { client, isSanityConfigured } from "./client";
import {
  allPostSlugsQuery,
  featuredPostQuery,
  postBySlugQuery,
  postsByCategoryQuery,
  postsQuery,
} from "./queries";

export type PostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string | null;
  publishedAt?: string | null;
  featured?: boolean;
  authorName?: string | null;
  authorRole?: string | null;
  authorImage?: unknown;
  categories?: { title: string; slug: { current: string } }[] | null;
  cover?: unknown;
  readTime?: number | null;
};

export type Post = PostCard & {
  body?: unknown;
  authorBio?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

export async function getPosts(): Promise<PostCard[]> {
  if (!isSanityConfigured) return [];
  return client.fetch(postsQuery);
}

export async function getFeaturedPost(): Promise<PostCard | null> {
  if (!isSanityConfigured) return null;
  return client.fetch(featuredPostQuery);
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) return null;
  return client.fetch(postBySlugQuery, { slug });
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return [];
  const slugs: { slug: string }[] = await client.fetch(allPostSlugsQuery);
  return slugs.map((s) => s.slug);
}

export async function getPostsByCategory(slug: string): Promise<PostCard[]> {
  if (!isSanityConfigured) return [];
  return client.fetch(postsByCategoryQuery, { slug });
}
