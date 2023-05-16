import './globals.css'
import localFont from 'next/font/local';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const fonts = localFont({
  src: [
    {
      path: '../assets/fonts/UberMoveTextBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/UberMoveTextMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/UberMoveTextRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/UberMoveTextLight.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../assets/fonts/UberMoveBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/UberMoveMedium.otf',
      weight: '500',
      style: 'normal',
    },
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  )
}
