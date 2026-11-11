import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nail Artistry by Riya | Chennai",
  description: "Thoughtful nail art, gel polish and nail extensions by Riya. Book your appointment in Chennai.",
  keywords: ["nail art Chennai", "gel polish", "nail extensions", "press-on nails"],
  openGraph: { title: "Nail Artistry by Riya", description: "A little art at your fingertips.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
