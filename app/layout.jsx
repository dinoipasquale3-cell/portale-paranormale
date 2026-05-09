export const metadata = {
  title: "Portale Paranormale",
  description: "Storie e fenomeni inspiegabili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
