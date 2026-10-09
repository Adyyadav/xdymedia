import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import OfflineWatcher from "@/components/OfflineWatcher";
import SplashScreen from "@/components/SplashScreen";
import { SPLASH_BOOT_SCRIPT } from "@/lib/splash";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://xdymedia.com"),
  title: {
    default: "XDY Media — Digital Growth & Automation Agency",
    template: "%s — XDY Media",
  },
  description:
    "Technology-driven digital growth and automation agency helping brands, creators, and businesses build, manage, automate, and grow their online presence.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jbmono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SPLASH_BOOT_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <SplashScreen />
        <ScrollProgress />
        <Navbar />
        <main className="pt-[92px]">{children}</main>
        <Footer />
        <BackToTop />
        <OfflineWatcher />
      </body>
    </html>
  );
}
