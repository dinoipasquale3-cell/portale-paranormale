"use client";

import Link from "next/link";

export default function Categorie() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Categorie</h1>

      <ul style={{ lineHeight: "2" }}>
        <li><Link href="/categorie/fantasmi">Fantasmi</Link></li>
        <li><Link href="/categorie/creature">Creature</Link></li>
        <li><Link href="/categorie/case-infestate">Case Infestate</Link></li>
        <li><Link href="/categorie/inspiegabili">Fenomeni Inspiegabili</Link></li>
        <li><Link href="/categorie/ufo">UFO</Link></li>
      </ul>
    </main>
  );
}
