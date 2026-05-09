"use client";

import Link from "next/link";

export default function Inspiegabili() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Fenomeni Inspiegabili</h1>

      <p>
        Dossier e casi legati a eventi che sfidano ogni spiegazione logica:
        anomalie fisiche, distorsioni dello spazio, sparizioni misteriose,
        fenomeni ambientali impossibili e manifestazioni che non rientrano in
        nessuna categoria tradizionale del paranormale.
      </p>

      <h2>Storie nella categoria</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li>
          <Link href="/storie/anjikuni">
            Il Villaggio Scomparso di Anjikuni – Il Mistero del 1930
          </Link>
        </li>

        <li>
          <Link href="/storie/punto-nero-valmadrera">
            Il Punto Nero di Valmadrera – La Realtà che Si Spezza
          </Link>
        </li>

        <li>
          <Link href="/storie/casa-voci-spezzate">
            La Casa delle Voci Spezzate – Le Presenze Incomplete
          </Link>
        </li>

        <li>
          <Link href="/storie/casa-pietra-rossa">
            La Casa di Pietra Rossa – Le Pareti che Respirano
          </Link>
        </li>
      </ul>
    </main>
  );
}
