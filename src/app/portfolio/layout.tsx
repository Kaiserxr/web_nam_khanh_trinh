import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Featured projects and work!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
