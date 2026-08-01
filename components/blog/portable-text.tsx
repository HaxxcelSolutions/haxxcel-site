import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { urlForImage } from "@/lib/sanity/client";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-6 leading-8 text-[#3d4675]">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-12 text-2xl font-semibold text-[#111844] sm:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-xl font-semibold text-[#111844] sm:text-2xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 text-lg font-semibold text-[#111844]">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-[#4b5694] pl-5 text-lg leading-8 text-[#171f4d] italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-6 list-disc space-y-2 pl-6 text-[#3d4675]">{children}</ul>,
    number: ({ children }) => <ol className="mt-6 list-decimal space-y-2 pl-6 text-[#3d4675]">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-8">{children}</li>,
    number: ({ children }) => <li className="leading-8">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href as string | undefined;
      if (!href) return <>{children}</>;
      const isInternal = href.startsWith("/");
      if (isInternal) return <Link href={href} className="font-semibold text-[#414b84] underline decoration-[#4b5694]/40 underline-offset-4 hover:decoration-[#4b5694]">{children}</Link>;
      return (
        <a
          href={href}
          target={value?.openInNewTab ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="font-semibold text-[#414b84] underline decoration-[#4b5694]/40 underline-offset-4 hover:decoration-[#4b5694]"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-[#111844]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code className="rounded bg-[#171f4d]/10 px-1.5 py-0.5 font-mono text-sm text-[#414b84]">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1600).url();
      return (
        <figure className="mt-8">
          <Image
            src={url}
            alt={value.alt ?? ""}
            width={1600}
            height={900}
            className="w-full rounded-2xl border border-[#4b5694]/15"
          />
          {value.caption ? (
            <figcaption className="mt-3 text-center text-sm text-[#7288ae]">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    callout: ({ value }) => {
      const toneStyles: Record<string, string> = {
        info: "border-[#4b5694]/30 bg-[#4b5694]/10",
        tip: "border-[#5c69a0]/40 bg-[#7288ae]/15",
        warning: "border-[#5c69a0]/50 bg-[#4b5694]/15",
      };
      return (
        <aside className={`mt-8 rounded-2xl border-l-4 p-5 ${toneStyles[value?.tone ?? "info"] ?? toneStyles.info}`}>
          {value?.title ? <p className="text-sm font-semibold text-[#111844]">{value.title}</p> : null}
          {value?.body ? <p className="mt-1 text-sm leading-7 text-[#3d4675]">{value.body}</p> : null}
        </aside>
      );
    },
  },
};

export function BlogBody({ value }: { value: unknown }) {
  return <PortableText value={value as never} components={components} />;
}
