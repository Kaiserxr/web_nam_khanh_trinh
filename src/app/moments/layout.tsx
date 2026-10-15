import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moments",
  description: "Achievements & Milestones in my journey",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
