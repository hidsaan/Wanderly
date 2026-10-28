import './globals.css'

export const metadata = {
  title: 'Wanderly - Discover Places That Stay With You',
  description: 'Explore breathtaking destinations, curated experiences, and personalized travel planning. Your next adventure starts here.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
