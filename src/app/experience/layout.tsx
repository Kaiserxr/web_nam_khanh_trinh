import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional Experience",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
