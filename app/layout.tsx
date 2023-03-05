import './globals.css'

export const metadata = {
  title: 'Muhammed Shakir C K',
  description: 'Not just a developer, but a problem solver',
}
import TopNav from './components/topNav'
import SocialIcons from './components/socialIcons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <SocialIcons/>
            <TopNav />
        {children}</body>
    </html>
  )
}
