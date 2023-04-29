import React from 'react'
import Nav from './Landing/Nav'
import Footer from './Landing/Footer'
import LanguageCtxWrapper from './LanguageCtxWrapper';

function Layout({ children }) {

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
  
}

export default Layout