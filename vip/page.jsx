"use client";

import { useState } from "react";

export default function VIP() {
  const [token, setToken] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  function handleUnlock() {
    if (token === "TUO_TOKEN_VIP") {
      setUnlocked(true);
    }
  }

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Sezione VIP</h1>

      {!unlocked && (
        <>
          <p>Accesso riservato. Per sbloccare le storie VIP:</p>

          <h3>Pagamento PayPal</h3>
          <p>
            Invia <strong>€4.99</strong> tramite PayPal (Familiari e Amici) a:<br />
            <strong>perruccigregorio31@gmail.com</strong>
          </p>

          <h3>Inserisci il token ricevuto</h3>
          <input
            type="text"
            placeholder="Inserisci token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{ padding: "10px", width: "250px" }}
          />
          <button onClick={handleUnlock} style={{ marginLeft: "10px" }}>
            Sblocca
          </button>
        </>
      )}

      {unlocked && (
        <div className="hallucination">
          <h2>Accesso VIP Attivato 🔓</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>Storia VIP 1</li>
            <li>Storia VIP 2</li>
            <li>Storia VIP 3</li>
          </ul>
        </div>
      )}
    </main>
  );
}
