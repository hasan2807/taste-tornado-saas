export const metadata = {
  title: 'Taste Tornado',
  description: 'Digital Menu Card',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}

