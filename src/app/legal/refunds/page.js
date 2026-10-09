import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description: "XDY Media Refund & Cancellation Policy.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund & Cancellation Policy" updated="Last updated: September 2026">
      <p>This Refund &amp; Cancellation Policy explains the terms under which XDY Media handles cancellations and refunds.</p>

      <h2>1. Refundable Services</h2>
      <p>Refunds may be available in the following circumstances:</p>
      <ul>
        <li>If we are unable to deliver the agreed-upon scope of work due to our failure, and no alternative solution is available</li>
        <li>If a project is cancelled by you before any work has begun (as defined in the applicable agreement)</li>
        <li>As otherwise explicitly stated in your specific service agreement or proposal</li>
      </ul>

      <h2>2. Non-Refundable Services</h2>
      <p>The following are generally non-refundable once work has commenced:</p>
      <ul>
        <li>Digital services, including strategy, consulting, content creation, design, and automation development</li>
        <li>Monthly retainers or recurring service fees for months already invoiced</li>
        <li>Setup fees, onboarding fees, or one-time project initiation fees</li>
        <li>Third-party costs incurred on your behalf (ad spend, platform fees, tool subscriptions, etc.)</li>
        <li>Account recovery and appeal assistance — due to the nature of the service, fees are non-refundable once the appeal process is initiated</li>
      </ul>

      <h2>3. Digital-Service Limitations</h2>
      <p>Because our services are largely digital, strategic, and creative in nature — and involve time, expertise, and effort that cannot be &quot;returned&quot; — refunds are limited as described in this policy. Once work has begun, the value of that work has been consumed.</p>

      <h2>4. Cancellation Process</h2>
      <p>To cancel a service or request a refund:</p>
      <ul>
        <li>Submit a cancellation request in writing via email to <b>billing@xdymedia.com</b></li>
        <li>Include your name, project reference, and reason for cancellation</li>
        <li>We will confirm receipt within 3 business days</li>
        <li>Refunds (if applicable) will be processed within 14 business days of approval</li>
      </ul>

      <h2>5. Processing Timelines</h2>
      <p>Approved refunds are processed within 14 business days. Refunds are returned to the original payment method unless otherwise agreed. Timelines may vary depending on your payment provider or bank.</p>

      <h2>6. Custom-Service Rules</h2>
      <p>For custom or enterprise engagements, the specific refund and cancellation terms are defined in your signed agreement or proposal. Those terms override this general policy where applicable.</p>

      <h2>7. Contact</h2>
      <p>For questions about this policy, contact us at <b>billing@xdymedia.com</b>.</p>
    </LegalLayout>
  );
}
