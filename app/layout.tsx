import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fenêtre Aluminium Premium",
  description:
    "Infographie avant/après mettant en valeur les gains énergétiques et acoustiques d'une fenêtre aluminium moderne."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
