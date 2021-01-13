import React, { PropsWithChildren } from 'react'
import * as LayoutStyle from './layout.style'

const Layout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <LayoutStyle.GlobalStyle />
      <div>
        <a href="/">Home</a>
        <a href="/experience">Experience</a>
      </div>
      {children}
    </>
  )
}

export default Layout
