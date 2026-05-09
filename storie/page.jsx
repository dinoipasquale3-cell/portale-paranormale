"use client";

import Link from "next/link";

export default function Storie() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Tutte le Storie</h1>

      <ul style={{ lineHeight: "2" }}>
        <li><Link href="/storie/casa-pietra-rossa">Casa di Pietra Rossa</Link></li>
        <li><Link href="/storie/casa-voci-spezzate">Casa delle Voci Spezzate</Link></li>
        <li><Link href="/storie/monte-malnera-creatura">Monte Malnera – Creatura</Link></li>
        <li><Link href="/storie/punto-nero-valmadrera">Punto Nero di Valmadrera</Link></li>
        <li><Link href="/storie/colle-ombroso-ufo">Colle Ombroso – UFO</Link></li>
        <li><Link href="/storie/valensole-ufo">Valensole – Caso Masse</Link></li>
        <li><Link href="/storie/villisca">Casa di Villisca</Link></li>
        <li><Link href="/storie/whaley-house">Whaley House</Link></li>
        <li><Link href="/storie/anjikuni">Villaggio di Anjikuni</Link></li>
      </ul>
    </main>
  );
}
