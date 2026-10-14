import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyArcade — Belajar Jadi Lebih Seru!",
  description: "Belajar, kumpulkan XP, dan naik level bersama StudyArcade.",
  applicationName: "StudyArcade",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
