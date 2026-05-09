"use client";

import { useState } from "react";

export default function Admin() {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  function handleLogin() {
    if (token === "TOKEN_ADMIN_GIORGIO") setAdmin(true);
  }

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Area Admin</h1>

      {!admin && (
        <>
          <p>Accesso riservato.</p>
          <input
            type="password"
            placeholder="Token Admin"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
            Entra
          </button>
        </>
      )}

      {admin && (
        <>
          <h2>Modalità Admin Attiva 🔧</h2>
          <ul>
            <li>Gestione Storie</li>
            <li>Contenuti VIP</li>
            <li>Debug</li>
            <li>Token salvati</li>
          </ul>
        </>
      )}
    </main>
  );
}
