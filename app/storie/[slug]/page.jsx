const stories = {
  "la-casa-senza-respiro": {
    title: "La Casa Senza Respiro",
    content: `
Nel 1998, una squadra di vigili del fuoco entrò in una casa dove l’aria risultava “pesante”.
Le registrazioni rivelarono un respiro profondo proveniente dalle pareti.

Durante l’evacuazione, uno dei vigili disse di aver sentito la casa “inspirare”.
Quando uscì, la porta si chiuse da sola… come se la casa avesse espirato.
`
  },

  "il-volto-dietro-il-vetro": {
    title: "Il Volto dietro il Vetro",
    content: `
Una donna fotografò la finestra del salotto.
Nell’immagine comparve un volto umano premuto contro il vetro.

Gli occhi erano completamente neri.
Il volto non apparteneva a nessuno dei presenti.
E soprattutto… non apparteneva a nessuno dei vicini.
`
  },

  "luomo-che-cammina-al-contrario": {
    title: "L’Uomo che Cammina al Contrario",
    content: `
Avvistato nei boschi del Piemonte.
Si muove come un film riprodotto al contrario.

I testimoni riferiscono che il suo volto è sempre rivolto verso chi lo osserva.
Anche quando si allontana.
`
  }
};

export async function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export default function StoryPage({ params }) {
  const story = stories[params.slug];

  if (!story) return <h1>Storia non trovata</h1>;

  return (
    <div>
      <h1 className="cinematic-title">{story.title}</h1>
      <p style={{ whiteSpace: "pre-line", marginTop: "20px" }}>
        {story.content}
      </p>
    </div>
  );
}
