import '../styles/main.scss'
export const metadata = {
  title: "My Restaurants",
  description: "First project on React + Next"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
