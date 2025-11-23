import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "About Eduvet University - Our History & Excellence Since 1990",
  description:
    "Learn about Eduvet University's history since 1990. Discover our commitment to quality education, academic excellence, and student success. Over 7,000 graduates and counting.",
  path: "/about",
  keywords: [
    "about Eduvet University",
    "university history",
    "academic excellence",
    "quality education",
    "university achievements",
  ],
  image: "/gallery/gallery-9.jpg",
});

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
