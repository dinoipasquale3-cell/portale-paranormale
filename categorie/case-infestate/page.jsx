"use client";

import Link from "next/link";

export default function CaseInfestate() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Case Infestate</h1>

      <p>
        Dossier, indagini e testimonianze sulle abitazioni più inquietanti,
        luoghi dove presenze, fenomeni fisici e manifestazioni inspiegabili
        hanno lasciato un segno profondo. Case che sembrano “vive”, che
        reagiscono, osservano e trattengono chi vi entra.
      </p>

      <h2>Storie nella categoria</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li>
          <Link href="/storie/casa-pietra-rossa">
            La Casa di Pietra Rossa – Le Pareti che Respirano
          </Link>
        </li>

        <li>
          <Link href="/storie/casa-voci-spezzate">
            La Casa delle Voci Spezzate – Le Presenze Incomplete
          </Link>
        </li>

        <li>
          <Link href="/storie/villisca">
            La Casa di Villisca – Gli Otto Spiriti del 1912
          </Link>
        </li>

        <li>
          <Link href="/storie/whaley-house">
            La Whaley House – La Casa più Infestata d’America
          </Link>
        </li>
      </ul>
    </main>
  );
}
