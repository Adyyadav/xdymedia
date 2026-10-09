import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import { SERVICE_CONTENT, getServiceContent } from "@/lib/service-content";
import { getService } from "@/lib/site-data";

export function generateStaticParams() {
  return Object.keys(SERVICE_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) return {};
  const svc = getService(slug);
  return {
    title: svc?.title || slug,
    description: content.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) notFound();

  return <ServiceTemplate hero={content.hero} blocks={content.blocks} />;
}
