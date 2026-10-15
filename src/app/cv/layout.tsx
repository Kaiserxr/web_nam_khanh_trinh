import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV & Resume",
  description: "CV and 1-page Resume",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
