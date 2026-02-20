import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concrete Vaults Analytics",
  description: "Community historical dashboard for Concrete.xyz vaults",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
