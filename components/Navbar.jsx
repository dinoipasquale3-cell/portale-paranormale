"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 25px",
        background: "#111",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Link href="/" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        PORTALE PARANORMALE
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/storie">Storie</Link>
        <Link href="/categorie">Categorie</Link>
        <Link href="/vip">VIP</Link>
        <Link href="/contattami">Contattami</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
