import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css"; // import before globals.css
import "./globals.css";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import AppShell from "@/components/header/AppShell";

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
  const theme = createTheme({});
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <AppShell>{children}</AppShell>
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
