export default function StoriePage() {
  const stories = [
    {
      title: "La Casa Senza Respiro",
      slug: "la-casa-senza-respiro",
      preview: "Una casa che sembra respirare… e non è un modo di dire."
    },
    {
      title: "Il Volto dietro il Vetro",
      slug: "il-volto-dietro-il-vetro",
      preview: "Una fotografia innocente. Un volto che non dovrebbe esserci."
    },
    {
      title: "L’Uomo che Cammina al Contrario",
      slug: "luomo-che-cammina-al-contrario",
      preview: "Si muove come un film invertito. E ti guarda anche quando si allontana."
    }
  ];

  return (
    <div>
      <h1 className="cinematic-title">Storie Paranormali</h1>

      <div className="story-list">
        {stories.map((story) => (
          <a key={story.slug} href={`/storie/${story.slug}`} className="story-card">
            <h2>{story.title}</h2>
            <p>{story.preview}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
