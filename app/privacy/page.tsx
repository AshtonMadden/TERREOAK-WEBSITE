import { Container } from "../components/ds";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy | TERREOAK Landscaping & Snow",
  description: "How TERREOAK Landscaping & Snow collects, uses and protects your personal information when you request a quote or use our Calgary services.",
  path: "/privacy",
});

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip pb-20 pt-36 md:pb-28 md:pt-44">
      <Container>
        <div className="mx-auto max-w-[760px]">
          <h1 className="to-display to-h2">Privacy Policy</h1>
          <div className="to-prose mt-10">
            <div>
                                <p>Last updated: June 2, 2026</p>
                                <h2>1. Introduction</h2>
                                <p>
                                    Welcome to TERREOAK Landscaping & Snow. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (terreoak.ca) and tell you about your privacy rights.
                                </p>
                                <h2>2. Data We Collect</h2>
                                <p>
                                    We may collect, use, store and transfer different kinds of personal data about you when you request quotes or engage our services:
                                </p>
                                <ul>
                                    <li><strong>Identity Data:</strong> First name, last name.</li>
                                    <li><strong>Contact Data:</strong> Service address, email address, and telephone numbers.</li>
                                    <li><strong>Property Data:</strong> Details and photos regarding your property necessary to provide accurate landscaping and snow removal estimates.</li>
                                    <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type, and location data collected via cookies or our analytics partners.</li>
                                </ul>
                                <h2>3. How We Use Your Data</h2>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to:
                                </p>
                                <ul>
                                    <li>Provide accurate estimates for our landscaping, property maintenance, and snow removal services.</li>
                                    <li>Manage your account and process payments via our client portal.</li>
                                    <li>Communicate with you regarding scheduling, project updates, and service reminders.</li>
                                </ul>
                                <h2>4. Data Security</h2>
                                <p>
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees and contractors who have a business need to know.
                                </p>
                                <h2>5. Third-Party Services</h2>
                                <p>
                                    We utilize <strong>Jobber</strong> to securely handle our estimates, scheduling, client communication, and invoicing. When you submit a work request form on our site, your information is processed directly through Jobber. We do not control Jobber’s data storage, but you can review their privacy policy directly through their platform.
                                </p>
                                <h2>6. Contact Us</h2>
                                <p>
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                </p>
                                <ul>
                                    <li><strong>Email:</strong> services@terreoak.ca</li>
                                    <li><strong>Phone:</strong> (587) 707-7648</li>
                                    <li><strong>Location:</strong> Calgary, Alberta, Canada</li>
                                </ul>
                            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
