import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "Project details",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
