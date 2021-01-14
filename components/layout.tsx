import React, { PropsWithChildren } from 'react'
import * as LayoutStyle from '../styles/components/layout.style'
import Navbar from './navbar'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import ThemeDefault from '../styles/components/theme.default'

const Layout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;600;700;800;900&family=Saira+Extra+Condensed:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={ThemeDefault}>
        <LayoutStyle.Header>
          <LayoutStyle.Container>
            <LayoutStyle.SiteLogo>
              <LayoutStyle.SiteTitle href="/">
                Alef Castelo
              </LayoutStyle.SiteTitle>
              <LayoutStyle.SiteSubTitle>
                Software Engineer
              </LayoutStyle.SiteSubTitle>
            </LayoutStyle.SiteLogo>
            <Navbar />
          </LayoutStyle.Container>
        </LayoutStyle.Header>
        <LayoutStyle.Container>{children}</LayoutStyle.Container>
        <LayoutStyle.GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default Layout
