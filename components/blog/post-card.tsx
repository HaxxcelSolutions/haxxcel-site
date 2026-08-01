import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/lib/sanity/client";
import type { PostCard } from "@/lib/sanity/fetch";

function formatDate(date: string | null | undefined) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function PostCard({ post, priority = false }: { post: PostCard; priority?: boolean }) {
  const coverUrl = post.cover ? urlForImage(post.cover as never).width(1200).url() : null;
  const date = formatDate(post.publishedAt);
  const category = post.categories?.[0];

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col overflow-hidden rounded-3xl card-cream transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/30"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#171f4d]/10">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-4xl">✶</div>
        )}
        {post.featured ? (
          <span className="absolute top-4 left-4 rounded-full bg-[#111844] px-3 py-1 text-xs font-semibold text-[#eae0cf]">
            Featured
          </span>
        ) : null}
        {category ? (
          <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#111844] backdrop-blur">
            {category.title}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-wide text-[#7288ae] uppercase">
          {date ?? "Haxxcel Insights"}
          {post.readTime ? ` · ${post.readTime} min read` : null}
        </p>
        <h3 className="mt-3 text-lg font-semibold text-[#111844] transition group-hover:text-[#414b84]">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="mt-2 line-clamp-3 text-sm leading-7 text-[#3d4675]">{post.excerpt}</p>
        ) : null}
        {post.authorName ? (
          <p className="mt-auto pt-4 text-sm font-medium text-[#414b84]">By {post.authorName}</p>
        ) : null}
      </div>
    </Link>
  );
}
