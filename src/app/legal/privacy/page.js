import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy",
  description: "XDY Media Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="Last updated: September 2026">
      <p>This Privacy Policy explains how XDY Media (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and protects your personal information. We comply with applicable data-protection laws, including the Indian Digital Personal Data Protection (DPDP) Act, 2023, and applicable DPDP Rules.</p>

      <h2>1. What Information We Collect</h2>
      <h3>Contact Information</h3>
      <p>Name, email address, phone number, WhatsApp number, business/brand name, website, and social media profiles — collected when you contact us or use our services.</p>
      <h3>Account / Project Information</h3>
      <p>Details about your projects, requirements, preferences, and any information you share during consultations or service delivery.</p>
      <h3>Payment Information</h3>
      <p>Billing details required to process payments. Payment processing is handled by secure, PCI-compliant payment processors. We do not store full card numbers.</p>
      <h3>Technical Information</h3>
      <p>IP address, browser type, device information, pages visited, and usage data collected automatically when you visit our website.</p>

      <h2>2. Cookies &amp; Analytics</h2>
      <p>We use cookies and similar technologies to improve your experience and analyze site usage. See our Cookie Policy for details. Analytics tools help us understand how visitors use our website so we can improve it.</p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To provide, manage, and deliver our services</li>
        <li>To respond to inquiries, proposals, and support requests</li>
        <li>To process payments and issue invoices</li>
        <li>To communicate about projects, updates, and service matters</li>
        <li>To improve our website, services, and client experience</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Project-related data is retained per your agreement; you may request deletion at any time.</p>

      <h2>5. Data Sharing</h2>
      <p>We do not sell your personal information. We may share data with:</p>
      <ul>
        <li>Service providers and processors who help us operate (hosting, email, analytics, payment processing)</li>
        <li>Legal or regulatory authorities where required by law</li>
        <li>Parties involved in a business transfer (e.g., merger or acquisition)</li>
      </ul>

      <h2>6. Third-Party Processors</h2>
      <p>We may use third-party processors for hosting, analytics, email, and payments. These processors handle data under their own privacy practices and applicable law. We select processors that offer reasonable security safeguards.</p>

      <h2>7. Security Measures</h2>
      <p>We implement appropriate technical and organizational measures to protect your data, including:</p>
      <ul>
        <li>HTTPS encryption across our website</li>
        <li>Encryption of sensitive data in transit and at rest</li>
        <li>Access control with least-privilege permissions</li>
        <li>Secure authentication for any client portal</li>
        <li>Data retention and deletion controls</li>
      </ul>
      <p>We never request passwords, 2FA codes, recovery codes, private keys, session cookies, or API secrets through ordinary contact forms.</p>

      <h2>8. Your Rights</h2>
      <p>Depending on applicable law, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p>Under the DPDP Act, you also have rights related to correction, completion, updation, and erasure of your personal data.</p>

      <h2>9. Data Deletion Requests</h2>
      <p>To request deletion of your data, contact us at <b>privacy@xdymedia.com</b>. We will respond within the timelines required by applicable law. Some data may be retained where required for legal or legitimate business purposes.</p>

      <h2>10. Contact / Privacy Requests</h2>
      <p>Email: privacy@xdymedia.com<br />Phone/WhatsApp: +30 697 044 5764</p>

      <h2>11. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Material changes will be communicated where required by law.</p>
    </LegalLayout>
  );
}
