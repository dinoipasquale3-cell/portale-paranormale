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
          <p>Una casa che respira. Letteralmente. E non vuole che tu esca.</p>
        </a>

        <a href="/storie/il-volto-dietro-il-vetro" className="story-card">
          <h2>👁️ Il Volto dietro il Vetro</h2>
          <p>Un volto premuto contro il vetro. Nessuno era in casa.</p>
        </a>

        <a href="/storie/luomo-che-cammina-al-contrario" className="story-card">
          <h2>🚶‍♂️ L’Uomo che Cammina al Contrario</h2>
          <p>Si muove come un film invertito. E ti guarda anche quando si allontana.</p>
        </a>

      </div>
    </div>
  );
}
