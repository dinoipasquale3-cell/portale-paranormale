export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Portale Paranormale
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8 }}>
        Il più grande archivio italiano di fenomeni paranormali reali.
      </p>

      <ul style={{ marginTop: "40px", lineHeight: "2" }}>
        <li><a href="/storie">Storie</a></li>
        <li><a href="/categorie">Categorie</a></li>
        <li><a href="/vip">VIP</a></li>
        <li><a href="/contattami">Contattami</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>
    </main>
  );
}
