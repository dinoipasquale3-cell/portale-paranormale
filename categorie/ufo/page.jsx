"use client";

import Link from "next/link";

export default function UFO() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>UFO e Incontri Ravvicinati</h1>

      <p>
        Dossier, testimonianze e casi documentati riguardanti oggetti volanti
        non identificati, entità non umane, atterraggi inspiegabili e fenomeni
        aerei anomali. Una raccolta dei casi più inquietanti e credibili
        legati al fenomeno UFO.
      </p>

      <h2>Storie nella categoria</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li>
          <Link href="/storie/colle-ombroso-ufo">
            Il Silenzio di Colle Ombroso – L’Oggetto che Non Doveva Atterrare
          </Link>
        </li>

        <li>
          <Link href="/storie/valensole-ufo">
            L’Incontro di Valensole – Il Caso Maurice Masse (1965)
          </Link>
        </li>

        <li>
          <Link href="/storie/anjikuni">
            Il Villaggio Scomparso di Anjikuni – Le Luci nel Cielo
          </Link>
        </li>

        <li>
          <Link href="/storie/punto-nero-valmadrera">
            Il Punto Nero di Valmadrera – Distorsioni e Presenze
          </Link>
        </li>
      </ul>
    </main>
  );
}
