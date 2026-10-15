import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Information",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
