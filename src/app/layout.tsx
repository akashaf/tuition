import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css"; // import before globals.css
import "./globals.css";
import {
  ColorSchemeScript,
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuition App",
  description: "Tuition App for tuition center in Malaysia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const myColor: MantineColorsTuple = [
    "#e5feee",
    "#d2f9e0",
    "#a8f1c0",
    "#7aea9f",
    "#53e383",
    "#3bdf70",
    "#2bdd66",
    "#1ac455",
    "#0caf49",
    "#00963c",
  ];
  const theme = createTheme({
    colors: {
      myColor,
    },
  });
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>{children}<Analytics /></MantineProvider>
      </body>
    </html>
  );
}
