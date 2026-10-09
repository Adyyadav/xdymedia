import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Cookie Policy",
  description: "XDY Media Cookie Policy.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="Last updated: September 2026">
      <p>This Cookie Policy explains how XDY Media uses cookies and similar technologies on our website.</p>

      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, understand how you use it, and improve your experience.</p>

      <h2>2. Types of Cookies We Use</h2>
      <h3>Necessary Cookies</h3>
      <p>These are essential for the website to function correctly — for example, security cookies and session management. These cannot be disabled.</p>
      <h3>Analytics Cookies</h3>
      <p>These help us understand how visitors interact with our website (pages visited, time spent, etc.), so we can improve our content and design. Data collected is aggregated and anonymized where possible.</p>
      <h3>Marketing Cookies (where applicable)</h3>
      <p>If we later run advertising campaigns, marketing cookies may be used to measure campaign performance and deliver relevant content. We will obtain consent where required before placing these.</p>

      <h2>3. Cookie Preferences</h2>
      <p>You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that disabling necessary cookies may affect website functionality.</p>
      <p>Where required by law, we provide a cookie-consent banner that lets you choose which non-necessary cookies are set.</p>

      <h2>4. How to Manage Cookies</h2>
      <ul>
        <li>Use your browser&apos;s settings to review and delete cookies</li>
        <li>Use your browser&apos;s incognito/private mode to avoid persistent cookies</li>
        <li>Use browser extensions that block tracking cookies</li>
        <li>Adjust cookie preferences via our consent banner (where shown)</li>
      </ul>
      <p>For more information on managing cookies, visit your browser&apos;s help documentation.</p>

      <h2>5. Changes to This Policy</h2>
      <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

      <h2>6. Contact</h2>
      <p>For questions about our use of cookies, contact us at <b>privacy@xdymedia.com</b>.</p>
    </LegalLayout>
  );
}
