import type { Metadata } from "next";
import Link from "next/link";

import { getPosts } from "@/lib/sanity/fetch";

import { PostCard } from "@/components/blog/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI automation, custom software, and web development from the Haxxcel Solutions team.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      {/* Hero */}
      <section className="max-w-3xl">
        <nav className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          / <span className="text-slate-200">Blog</span>
        </nav>
        <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
          Insights &amp; Articles
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Practical thinking on AI automation, custom software, and modern web development —
          straight from the team shipping it.
        </p>
      </section>

      {posts.length > 0 ? (
        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={post._id} post={post} priority={index < 3} />
          ))}
        </section>
      ) : (
        <section className="mt-12 rounded-3xl card-cream p-10 text-center">
          <p className="text-lg font-semibold text-[#111844]">No articles published yet</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-[#3d4675]">
            We&apos;re drafting the first posts. Check back soon — or if you&apos;re the team, open
            the content studio to start writing.
          </p>
          <Link
            href="/studio"
            className="mt-6 inline-flex rounded-full bg-[#111844] px-6 py-3 text-sm font-semibold text-[#eae0cf] transition hover:bg-[#1e285a]"
          >
            Open Content Studio
          </Link>
        </section>
      )}
    </main>
  );
}
