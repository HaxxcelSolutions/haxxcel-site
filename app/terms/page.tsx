import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of the Haxxcel Solutions website and services.",
};

const lastUpdated = "July 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:px-8 lg:px-12">
      <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-8 text-base leading-8 text-slate-300">
        <section>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the{" "}
            {siteConfig.name} website and services. By using our website or engaging our services, you
            agree to these Terms. If you do not agree, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">1. Services</h2>
          <p className="mt-3">
            Haxxcel Solutions provides web development, custom software development, app development, and
            AI automation services. The specific scope, deliverables, timeline, and pricing for any
            engagement will be agreed separately in a proposal, quote, or written agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. Client Responsibilities</h2>
          <p className="mt-3">
            To deliver our services effectively, you agree to provide accurate information, timely
            feedback, and any materials, access, or approvals reasonably required. Delays in providing
            these may affect project timelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Payments &amp; Fees</h2>
          <p className="mt-3">
            Fees, payment schedules, and milestones are defined in the applicable proposal or agreement.
            Unless otherwise stated, invoices are payable within the agreed timeframe. Work may be paused
            if payments are overdue.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. Intellectual Property</h2>
          <p className="mt-3">
            Upon full payment, ownership of the final custom deliverables created specifically for you
            transfers to you, unless agreed otherwise. We retain the right to use underlying tools,
            frameworks, and general know-how, and to showcase completed work in our portfolio unless you
            request otherwise in writing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Confidentiality</h2>
          <p className="mt-3">
            Both parties agree to keep confidential any non-public information shared during an engagement
            and to use it only for the purpose of delivering the agreed services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Warranties &amp; Disclaimers</h2>
          <p className="mt-3">
            We deliver our services with reasonable skill and care. However, our website and services are
            provided &ldquo;as is&rdquo; without warranties of any kind, express or implied, except as
            expressly stated in a signed agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">7. Limitation of Liability</h2>
          <p className="mt-3">
            To the maximum extent permitted by law, Haxxcel Solutions shall not be liable for any
            indirect, incidental, or consequential damages. Our total liability for any claim shall not
            exceed the amount paid by you for the specific service giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">8. Third-Party Services</h2>
          <p className="mt-3">
            Our solutions may integrate third-party tools and services. We are not responsible for the
            availability, performance, or terms of those third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">9. Termination</h2>
          <p className="mt-3">
            Either party may terminate an engagement as set out in the applicable agreement. Upon
            termination, you agree to pay for all work completed up to the termination date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">10. Governing Law</h2>
          <p className="mt-3">
            These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to
            its conflict-of-law principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">11. Changes to These Terms</h2>
          <p className="mt-3">
            We may update these Terms from time to time. Continued use of our website or services after
            changes are posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">12. Contact Us</h2>
          <p className="mt-3">
            For any questions about these Terms, contact us at{" "}
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
