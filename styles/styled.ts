import styled, { createGlobalStyle } from 'styled-components'

const config = {
  color: {
    primary: '#039be5'
  }
}

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: 0px;   
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`
export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
`
export const Header = styled.div`
    width: 100%;
    padding-top: 50px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const TitleName = styled.h1`
    font-size: 5em;
    text-align: center;
    font-family: 'Saira Extra Condensed', sans-serif !important;
    
    span.first-name {
    }

    span.last-name {
        color: ${config.color.primary}
    }
`

export const ProfileDescription = styled.h2`
    font-size: 1.2em;
    color: #999;
    text-align: center;
`

export const ImageProfile = styled.img`
    border-radius: 300px;
    border: 4px solid #999;
    width: 220px;
    height: auto;
`
