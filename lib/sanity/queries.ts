import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    "authorName": author->name,
    "authorRole": author->role,
    "authorImage": author->image,
    "categories": categories[]->{ title, slug },
    "cover": mainImage,
    "readTime": round(length(pt::text(body)) / 5 / 200)
  }
`;

export const featuredPostQuery = groq`
  *[_type == "post" && featured == true && defined(slug.current)][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "authorName": author->name,
    "authorRole": author->role,
    "authorImage": author->image,
    "categories": categories[]->{ title, slug },
    "cover": mainImage,
    "readTime": round(length(pt::text(body)) / 5 / 200)
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    seoTitle,
    seoDescription,
    "authorName": author->name,
    "authorRole": author->role,
    "authorImage": author->image,
    "authorBio": author->bio,
    "categories": categories[]->{ title, slug },
    "cover": mainImage,
    body,
    "readTime": round(length(pt::text(body)) / 5 / 200)
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && defined(slug.current) && $slug in categories[]->slug.current]
    | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "authorName": author->name,
    "cover": mainImage,
    "categories": categories[]->{ title, slug }
  }
`;
