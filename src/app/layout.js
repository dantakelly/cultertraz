import globals from "./globals.css"

export const metadata = {
title: "Cultertraz",
  description: "in soft strains of dusk 🌇",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
