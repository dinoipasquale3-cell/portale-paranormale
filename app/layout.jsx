export const metadata = {
  title: "Portale Paranormale",
  description: "Il più grande archivio italiano di fenomeni inspiegabili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ background: "#0a0a0a", color: "#fff", fontFamily: "serif" }}>
        {children}
      </body>
    </html>
  );
}
