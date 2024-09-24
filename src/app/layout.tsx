import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProviders";
import CursorEffects from "@/components/ui/CursorEffects";

const inter = Inter({ subsets: ["latin"] });
const title = "Trần Minh Phú | Software Developer From HCMC, Vietnam.";
const url = "https://www.linkedin.com/in/tmp-dev79/";
const description =
  "Developers are like plumbers in the digital world, except they never know how many 'leaks' they'll have to fix the next day!";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Angular Developer",
    "React Developer",
    "Javascript",
    "TypeScript",
    "jQuery",
    "Angular",
    "NodeJs",
    "ExpressJs",
    "NestJs",
    "HTML5",
    "CSS3",
    "SCSS",
    "TailwindCss",
    "Bootstrap",
    "Redux",
    "Amazon",
    "Docker",
    "Linux",
  ],
  applicationName: "My Portfolio",
  authors: [
    {
      name: "Trần Minh Phú",
    },
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <ThemeProvider>
          <Header />
          <div id="body-background"></div>
          <div id="body-wapper">
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
