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

        {/* STORIA 1 */}
        <div className="story-card">
          <h2>🩸 La Casa Senza Respiro</h2>
          <p>
            Nel 1998, una squadra di vigili del fuoco entrò in una casa di provincia
            dove l’aria risultava inspiegabilmente “pesante”.  
            Le registrazioni audio rivelarono un respiro profondo e lento,
            proveniente dalle pareti stesse.
          </p>
        </div>

        {/* STORIA 2 */}
        <div className="story-card">
          <h2>👁️ Il Volto dietro il Vetro</h2>
          <p>
            Una donna di Torino fotografò la finestra del suo salotto per testare
            una nuova fotocamera.  
            Nell’immagine comparve un volto umano, premuto contro il vetro,
            con gli occhi completamente neri.  
            Nessuno era in casa.
          </p>
        </div>

        {/* STORIA 3 */}
        <div className="story-card">
          <h2>🕯️ L’Uomo che Cammina al Contrario</h2>
          <p>
            Avvistato più volte nei boschi del Piemonte, si muove come un film
            riprodotto al contrario.  
            I testimoni riferiscono che il suo volto non è rivolto in avanti,
            ma verso chi lo osserva… anche quando si allontana.
          </p>
        </div>

      </div>
    </div>
  );
}
