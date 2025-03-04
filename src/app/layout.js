import globals from "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
title: "Cultertraz",
  description: "in soft strains of dusk 🌇",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
