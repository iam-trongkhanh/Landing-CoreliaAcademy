import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Programs & Courses - Social Science Degrees at Eduvet University",
  description:
    "Explore our comprehensive Social Science programs including Psychology, Sociology, Political Science, Anthropology, Economics, and more. Quality education with expert faculty at Eduvet University.",
  path: "/programs",
  keywords: [
    "university programs",
    "social science degrees",
    "psychology program",
    "sociology courses",
    "political science degree",
    "anthropology program",
    "economics courses",
  ],
  image: "/gallery/gallery-1.jpg",
});

export default function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
