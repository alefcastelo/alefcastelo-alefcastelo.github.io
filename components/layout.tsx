import React, { MouseEvent, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { AppBar, ThemeProvider, Link } from '@material-ui/core'
import * as S from '../styles/styled'
import { CustomTheme } from '../styles/material-theme'

const Layout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  const router = useRouter()

  const handlerClick = (e: MouseEvent, route: string) => {
    router.push(route)
    e.preventDefault()
  }

  return (
    <>
        <S.GlobalStyle />
        <ThemeProvider theme={CustomTheme}>
            <AppBar position="static" elevation={0}>
                <S.Links>
                    <Link href="/" onClick={(e) => handlerClick(e, '/')} color="inherit">Home</Link>
                    <Link href="/experience" onClick={(e) => handlerClick(e, '/experience')} color="inherit">Experience</Link>
                    <Link href="/about" onClick={(e) => handlerClick(e, '/about')} color="inherit">About</Link>
                </S.Links>
            </AppBar>
            { children }
        </ThemeProvider>
    </>
  )
}

export default Layout
