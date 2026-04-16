import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/providers";
import { MainLayout } from "@/components/layout/main-layout";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iRepair Technologies - Wholesale Cell Phone Repair Parts",
    template: "%s | iRepair Technologies",
  },
  description:
    "iRepair Technologies is your trusted B2B source for high-quality cell phone repair parts. Wholesale pricing on OEM and aftermarket components for iPhone, Samsung, Motorola, and more.",
  keywords: [
    "iRepair Technologies",
    "cell phone parts",
    "wholesale electronics",
    "iPhone parts",
    "Samsung parts",
    "Motorola parts",
    "B2B electronics",
    "repair parts",
    "OEM parts",
    "aftermarket parts",
    "screen replacement",
    "battery replacement",
  ],
  authors: [{ name: "iRepair Technologies" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "iRepair Technologies - Wholesale Cell Phone Repair Parts",
    description:
      "Your trusted B2B source for high-quality cell phone repair parts. Wholesale pricing on OEM and aftermarket components.",
    url: "https://irepairtech.com",
    siteName: "iRepair Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "iRepair Technologies - Wholesale Cell Phone Parts",
    description:
      "Your trusted B2B source for high-quality cell phone repair parts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            defaultTheme="light"
            enableSystem
            attribute="class"
            storageKey="irepair-theme"
          >
            <MainLayout>{children}</MainLayout>
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
