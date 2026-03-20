import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FLX by Kia — 1:1 Online Fitness Coaching",
  description:
    "Build muscle, lose fat, and gain confidence with Adam Kia — CPT, Nutritionist, and Online Coach. Apply for 1:1 coaching today.",
  openGraph: {
    title: "FLX by Kia — 1:1 Online Fitness Coaching",
    description:
      "Build muscle, lose fat, and gain confidence with Adam Kia — CPT, Nutritionist, and Online Coach.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} h-full`}
    >
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
