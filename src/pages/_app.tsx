import Navbar from "../components/Navbar"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from "@/components/Footer"
import { ProductProvider } from "../app/context/ProductContext "
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
    < >
    <SessionProvider session={session}>
    <div><Navbar/></div>
    <div className='' >
      <ProductProvider>
      <Component {...pageProps} />
      </ProductProvider>
    
   
    </div>
    <Footer/>
    </SessionProvider>
    </>
  )
}
