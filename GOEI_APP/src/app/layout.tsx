import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import "./phase2.css";
import "./operational.css";
import "./legal.css";
import "./workflow.css";
import "./audit.css";

export const metadata: Metadata = {
  title: "GOEI · Salud operacional gastronómica",
  description: "Aplicación guiada y trazable para evaluaciones GOEI provisionales.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
