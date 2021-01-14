import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: ${props => props.theme.size.sm}rem;
        color: ${props => props.theme.palette.dark};
    }

    h1, h2, h3, h4, h5, h6 {
      margin: ${props => props.theme.size.xl}rem
              0rem
              ${props => props.theme.size.sm}rem;
    }

    p {
        font-weight: 300;
        line-height: ${props => props.theme.size.xl}rem;
        text-align: justify;
    }

    a {
      color: ${props => props.theme.palette.primary};
      text-decoration: none;
    }
`

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 0 20px;
`

export const Header = styled.div`
  ${props => props.theme.boxShadow}
  padding: ${props => props.theme.size.xl}rem 0px;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SiteLogo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const SiteTitle = styled.a`
  font-size: 3.5rem;
  font-weight: 600;
  color: ${props => props.theme.palette.primary};
`

export const SiteSubTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`
