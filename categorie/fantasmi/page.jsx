"use client";

import Link from "next/link";

export default function Fantasmi() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Fantasmi</h1>

      <p>
        Una raccolta di storie, dossier e casi documentati legati a presenze,
        apparizioni e fenomeni paranormali attribuiti a entità spettrali.
      </p>

      <h2>Storie nella categoria</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li>
          <Link href="/storie/casa-voci-spezzate">
            La Casa delle Voci Spezzate
          </Link>
        </li>

        <li>
          <Link href="/storie/casa-pietra-rossa">
            La Casa di Pietra Rossa
          </Link>
        </li>

        <li>
          <Link href="/storie/villisca">
            La Casa di Villisca – Gli Otto Spiriti
          </Link>
        </li>

        <li>
          <Link href="/storie/whaley-house">
            La Whaley House – La Casa più Infestata d’America
          </Link>
        </li>

        <li>
          <Link href="/storie/anjikuni">
            Il Villaggio Scomparso di Anjikuni
          </Link>
        </li>
      </ul>
    </main>
  );
}
