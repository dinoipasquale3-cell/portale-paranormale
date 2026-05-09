"use client";

import Link from "next/link";

export default function Creature() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Creature</h1>

      <p>
        Dossier, avvistamenti e testimonianze su entità umanoidi, creature
        anomale e presenze fisiche che sfidano ogni classificazione naturale.
        Figure alte, magre, distorte, o esseri che sembrano provenire da
        un’altra dimensione.
      </p>

      <h2>Storie nella categoria</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li>
          <Link href="/storie/monte-malnera-creatura">
            La Cosa di Monte Malnera – L’Umanoide che Non Doveva Esistere
          </Link>
        </li>

        <li>
          <Link href="/storie/punto-nero-valmadrera">
            Il Punto Nero di Valmadrera – La Realtà che Si Spezza
          </Link>
        </li>

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
      </ul>
    </main>
  );
}
