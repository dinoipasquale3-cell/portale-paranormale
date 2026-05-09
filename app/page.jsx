export default function Home() {
  return (
    <div>
      <div className="fog-layer"></div>
      <div className="vhs-noise"></div>

      <h1 className="cinematic-title">Portale Paranormale</h1>
      <p className="cinematic-subtitle">
        Il più grande archivio italiano di fenomeni inspiegabili.
      </p>

      <div className="story-list">
        <div className="story-card">
          <h2>La Casa Senza Ombre</h2>
          <p>Una famiglia scopre che la loro casa non proietta ombre dopo il tramonto...</p>
        </div>

        <div className="story-card">
          <h2>Il Sussurro dietro la Porta</h2>
          <p>Ogni notte, alle 3:11, qualcuno bussa da dentro il muro...</p>
        </div>

        <div className="story-card">
          <h2>L’Uomo che Cammina al Contrario</h2>
          <p>Avvistato più volte nei boschi del Piemonte, si muove come un film invertito...</p>
        </div>
      </div>
    </div>
  );
}
