import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    palette: {
      primary: string
      dark: string
      light: string
      white: string
    }
    size: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
    }
    radius: number
    boxShadow: string
  }
}
