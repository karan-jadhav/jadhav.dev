import CurrentYear from "../../../components/CurrentYear";

export const dynamic = "force-static";

export const metadata = {
  title: "ReplyFuse — Privacy Policy",
  description:
    "Privacy Policy for ReplyFuse prototype testing phase, including data collection, usage, retention, and contact details.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight text-center mb-10">
          Privacy Policy
        </h1>
        <section className="space-y-10">
          {/* Introduction */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Introduction
            </h2>
            <p className="mt-3 text-gray-300">
              Welcome to <strong>ReplyFuse</strong>. We value your privacy and
              are committed to protecting your personal information during this
              testing phase of our prototype application.
            </p>
          </div>

          {/* Data Collection */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Data Collection
            </h2>
            <p className="mt-3 text-gray-300">
              We may collect limited information from users who are explicitly
              assigned as testers. This data is used solely for testing and
              improving the functionality of ReplyFuse.
            </p>
            <p className="mt-3 text-gray-300">
              No personal data is collected from individuals outside the
              designated testing group.
            </p>
          </div>

          {/* Data Usage */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Data Usage
            </h2>
            <p className="mt-3 text-gray-300">
              Any data collected is used exclusively to enhance and debug the
              application. It will not be shared with third parties.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Data Retention
            </h2>
            <p className="mt-3 text-gray-300">
              All testing data will be securely stored and deleted after the
              prototype phase or upon request from testers.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Contact Us
            </h2>
            <p className="mt-3 text-gray-300">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-2 text-gray-300">
              Email:{" "}
              <a
                href="mailto:contact@replyfuse.com"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                contact@replyfuse.com
              </a>
            </p>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-12">
          © <CurrentYear /> ReplyFuse. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
