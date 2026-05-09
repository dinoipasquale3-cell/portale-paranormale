"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        textAlign: "center",
        paddingTop: "120px",
        color: "#e5e5e5",
        position: "relative",
        zIndex: 10,
      }}
    >
      <h1 className="glitch" style={{ fontSize: "3.5rem" }}>
        404 – NON DOVEVI ENTRARE
      </h1>

      <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        Qualcosa ti ha osservato mentre cercavi questa pagina.
      </p>

      <Link href="/" style={{ display: "block", marginTop: "40px" }}>
        Torna indietro… finché puoi.
      </Link>
    </main>
  );
}
