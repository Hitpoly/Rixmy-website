import App from "next/app"
import Head from "next/head"
import '../styles/globals.css'
import '../styles/fontawesome.css'
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import LanguageCtxWrapper from '../components/LanguageCtxWrapper'
import {useRouter} from 'next/router'
import Script from "next/script"
import React, { useState, useEffect } from "react"
import * as ga from '../lib/google-analytics'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  // const { global } = pageProps
  const router = useRouter()

  useEffect(()=>{
    const handleRouteChange = (url) =>{
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete',handleRouteChange)

    return ()=>{
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events])
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive' />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <Head>
        
      </Head>
      {/* <GlobalContext.Provider value={global.attributes}> */}
      <LanguageCtxWrapper language={router.locale}>
        <Component {...pageProps} />
      </LanguageCtxWrapper>
      {/* </GlobalContext.Provider> */}
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`

  const appProps = await App.getInitialProps(ctx)
  // // Fetch global site settings from Strapi
  // const globalRes = await fetchAPI("/global", {
  //   populate: {
  //     favicon: "*",
  //     defaultSeo: {
  //       populate: "*",
  //     },
  //   },
  // })

  const globalRes= {
    data: ''
  }

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
