import "./globals.css";


export const metadata = {
  title: "TripleAlfa | Invest in Whisky Casks",
  description: "Explore exclusive whisky cask with TripleAlfa. We connect you to innovative alternative assets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
