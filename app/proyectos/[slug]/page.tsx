import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectDetail from "@/components/ProjectDetail";
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return <ProjectDetail p={p} />;
}