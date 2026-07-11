import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Haxxcel Solutions collects, uses, protects, and shares your information when you use our website and services.",
};

const lastUpdated = "July 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:px-8 lg:px-12">
      <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-8 text-base leading-8 text-slate-300">
        <section>
          <p>
            This Privacy Policy explains how {siteConfig.name} (&ldquo;Haxxcel Solutions&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects the
            information you provide when you visit our website or use our services. By using our website,
            you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
          <p className="mt-3">We may collect the following types of information:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-medium text-white">Information you provide:</span> your name, email
              address, phone number, company details, and any message you send us through our contact
              form or by email.
            </li>
            <li>
              <span className="font-medium text-white">Usage data:</span> basic technical information such
              as your browser type, device, and pages visited, collected automatically to help us improve
              the website.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
          <p className="mt-3">We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Respond to your inquiries and provide the services you request.</li>
            <li>Communicate with you about projects, quotes, and support.</li>
            <li>Improve our website, services, and customer experience.</li>
            <li>Comply with legal obligations and prevent misuse or fraud.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Cookies &amp; Analytics</h2>
          <p className="mt-3">
            Our website may use cookies and similar technologies to understand how visitors use the site
            and to improve performance. You can control or disable cookies through your browser settings.
            Any analytics we use are intended only to measure aggregate usage, not to identify
            individuals.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. How We Share Information</h2>
          <p className="mt-3">
            We do not sell or rent your personal information. We may share it only with trusted
            third-party service providers who help us operate our website and deliver our services (for
            example, email delivery providers), and only to the extent necessary. We may also disclose
            information where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
          <p className="mt-3">
            We take reasonable technical and organizational measures to protect your information against
            unauthorized access, loss, or misuse. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Data Retention</h2>
          <p className="mt-3">
            We retain your information only for as long as necessary to fulfil the purposes described in
            this policy, to comply with our legal obligations, and to resolve disputes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of the personal information we hold
            about you. To make such a request, please contact us using the details below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">8. Third-Party Links</h2>
          <p className="mt-3">
            Our website may contain links to third-party sites. We are not responsible for the privacy
            practices or content of those sites and encourage you to review their policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">9. Changes to This Policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">10. Contact Us</h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy or how we handle your data, contact us at{" "}
            <a href="mailto:contact@haxxcelsolutions.com" className="text-blue-300 hover:text-blue-200">
              contact@haxxcelsolutions.com
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-slate-400">{siteConfig.address}</p>
        </section>
      </div>
    </main>
  );
}
