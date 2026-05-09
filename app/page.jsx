export default function Home() {
  return (
    <div>
      <h1 className="cinematic-title">Portale Paranormale</h1>
      <p className="cinematic-subtitle">
        Il più grande archivio italiano di fenomeni inspiegabili.
      </p>

      <div className="story-list">

        <a href="/storie/la-casa-senza-respiro" className="story-card">
          <h2>🩸 La Casa Senza Respiro</h2>
          <p>Nel 1998, una squadra di vigili del fuoco entrò in una casa di provincia...</p>
        </a>

        <a href="/storie/il-volto-dietro-il-vetro" className="story-card">
          <h2>👁️ Il Volto dietro il Vetro</h2>
          <p>Una donna di Torino fotografò la finestra del suo salotto...</p>
        </a>

        <a href="/storie/luomo-che-cammina-al-contrario" className="story-card">
          <h2>🚶‍♂️ L’Uomo che Cammina al Contrario</h2>
          <p>Avvistato più volte nei boschi del Piemonte...</p>
        </a>

      </div>
    </div>
  );
}
