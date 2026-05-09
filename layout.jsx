"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
<div className="fog-layer"></div>
<div className="vhs-noise"></div>

        <Navbar />
        <div style={{ paddingTop: "20px" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
