import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head title="Eugênio Pacelli Dev"/>
      <body>{children}</body>
    </html>
  )
}
