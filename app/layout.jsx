"use client";

import "./globals.css";

export const metadata = {
  title: "Portale Paranormale",
  description: "Il più grande archivio italiano di fenomeni inspiegabili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <div className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/storie">Storie</a></li>
            <li><a href="/categorie">Categorie</a></li>
            <li><a href="/vip">VIP</a></li>
            <li><a href="/contattami">Contattami</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>

        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
