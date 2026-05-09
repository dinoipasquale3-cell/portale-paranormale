"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Portale Paranormale</h1>
      <p>Storie reali, dossier, fenomeni inspiegabili e incontri documentati.</p>

      <h2>Esplora</h2>
      <ul style={{ lineHeight: "2" }}>
        <li><Link href="/storie">Tutte le Storie</Link></li>
        <li><Link href="/categorie">Categorie</Link></li>
        <li><Link href="/vip">Sezione VIP</Link></li>
      </ul>

      <h2>Ultime Storie</h2>
      <ul style={{ lineHeight: "2" }}>
        <li><Link href="/storie/casa-pietra-rossa">La Casa di Pietra Rossa</Link></li>
        <li><Link href="/storie/casa-voci-spezzate">La Casa delle Voci Spezzate</Link></li>
        <li><Link href="/storie/colle-ombroso-ufo">Colle Ombroso – UFO</Link></li>
      </ul>
    </main>
  );
}
