import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { urlForImage } from "@/lib/sanity/client";
import { getAllPostSlugs, getPost } from "@/lib/sanity/fetch";

import { BlogBody } from "@/components/blog/portable-text";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt ?? undefined,
    openGraph: {
      type: "article",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt ?? undefined,
      publishedTime: post.publishedAt ?? undefined,
      images: post.cover
        ? [{ url: urlForImage(post.cover as never).width(1200).url() }]
        : undefined,
    },
  };
}

function formatDate(date: string | null | undefined) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const coverUrl = post.cover ? urlForImage(post.cover as never).width(1600).url() : null;
  const authorImageUrl = post.authorImage
    ? urlForImage(post.authorImage as never).width(96).url()
    : null;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-white">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-white">
          Blog
        </Link>{" "}
        / <span className="text-slate-200">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <span
              key={category.slug.current}
              className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-300"
            >
              {category.title}
            </span>
          ))}
        </div>
        <h1 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">{post.title}</h1>
        {post.excerpt ? (
          <p className="mt-5 text-lg leading-8 text-slate-300">{post.excerpt}</p>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
          {post.authorName ? (
            <span className="flex items-center gap-2.5">
              {authorImageUrl ? (
                <Image
                  src={authorImageUrl}
                  alt={post.authorName}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                />
              ) : (
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1e285a] text-sm font-semibold text-white">
                  {post.authorName.charAt(0)}
                </span>
              )}
              <span>
                <span className="font-medium text-slate-200">{post.authorName}</span>
                {post.authorRole ? <span> · {post.authorRole}</span> : null}
              </span>
            </span>
          ) : null}
          {formatDate(post.publishedAt) ? (
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">·</span>
              {formatDate(post.publishedAt)}
            </span>
          ) : null}
          {post.readTime ? (
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">·</span>
              {post.readTime} min read
            </span>
          ) : null}
        </div>
      </header>

      {/* Cover */}
      {coverUrl ? (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Body */}
      <article className="card-cream mt-10 rounded-3xl p-8 sm:p-12">
        {post.body ? <BlogBody value={post.body} /> : null}
      </article>

      {/* Author bio */}
      {post.authorName && post.authorBio ? (
        <aside className="mt-8 flex flex-col gap-4 rounded-3xl card-cream-soft p-8 sm:flex-row sm:items-start">
          {authorImageUrl ? (
            <Image
              src={authorImageUrl}
              alt={post.authorName}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#1e285a] text-xl font-semibold text-white">
              {post.authorName.charAt(0)}
            </span>
          )}
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#7288ae] uppercase">
              Written by
            </p>
            <p className="mt-1 font-semibold text-[#111844]">{post.authorName}</p>
            <p className="mt-2 text-sm leading-7 text-[#3d4675]">{post.authorBio}</p>
          </div>
        </aside>
      ) : null}

      <div className="mt-12 text-right">
        <Link
          href="/blog"
          className="inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200"
        >
          ← Back to all articles
        </Link>
      </div>
    </main>
  );
}
