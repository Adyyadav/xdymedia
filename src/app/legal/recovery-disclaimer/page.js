import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site-data";

export const metadata = {
  title: "Account Recovery Disclaimer",
  description: "XDY Media Account Recovery Disclaimer — recovery is not guaranteed, platform decisions are final, legitimate ownership required.",
};

export default function RecoveryDisclaimerPage() {
  return (
    <LegalLayout title="Account Recovery Disclaimer" updated="Last updated: September 2026">
      <p>This Account Recovery Disclaimer applies specifically to our account recovery and appeal assistance services. Please read it carefully before engaging these services.</p>

      <h2>1. Recovery Is Not Guaranteed</h2>
      <p>We do not and cannot guarantee that any account will be recovered, restored, or reinstated. Recovery outcomes depend on the specific circumstances of each case, the applicable platform&apos;s policies, and decisions made by the platform. No agency can guarantee account restoration.</p>

      <h2>2. Final Decisions Belong to the Platform</h2>
      <p>The relevant platform (e.g., Instagram, Meta, Facebook, X, TikTok, YouTube, Google, Telegram, Snapchat) makes all final decisions regarding account status, appeals, and restoration. We have no authority to override, influence, or guarantee these decisions. Platform decisions are final.</p>

      <h2>3. Legitimate Ownership Required</h2>
      <p>Our recovery assistance is available only to legitimate account owners or authorized representatives. By requesting this service, you confirm that you are the legitimate owner or an authorized representative of the account in question.</p>

      <h2>4. No Security Bypass</h2>
      <p>We do not bypass platform security controls, exploit vulnerabilities, use unauthorized access methods, or engage in any activity that circumvents a platform&apos;s security systems. Our assistance is limited to legitimate appeal processes and documentation support.</p>

      <h2>5. No Unauthorized Access</h2>
      <p>We do not obtain accounts through unauthorized access, credential theft, social engineering, or any other improper means. We do not provide access to accounts we do not have legitimate authorization to assist with.</p>

      <h2>6. Truthful Information Required</h2>
      <p>Clients must provide truthful and accurate information during any appeal process. Providing false, misleading, or fabricated information may violate platform policies and can harm the appeal&apos;s prospects. You are solely responsible for the accuracy of the information you provide.</p>

      <h2>7. Nature of the Service</h2>
      <p>Our service is assistance and guidance. We help prepare appeals, review policies, and navigate platform processes. We are not the platform, and we have no privileged access or special relationship with any platform.</p>

      <h2>8. Fees</h2>
      <p>Fees for recovery assistance are for our time, expertise, and effort — not for a guaranteed outcome. As such, fees are non-refundable once work on the appeal process has commenced, as described in our <Link href="/legal/refunds">Refund &amp; Cancellation Policy</Link>.</p>

      <h2>9. Contact</h2>
      <p>For questions about this disclaimer, contact us at <b>{SITE.email}</b>.</p>
    </LegalLayout>
  );
}
