import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "T4D",
  description: "TOMNET/D-STOP Transformative Technologies in Transportation (T4) Survey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
