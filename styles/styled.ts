import { darken, lighten } from '@material-ui/core'
import styled, { createGlobalStyle } from 'styled-components'
import { config } from './config'

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: 0px;   
    }
    
    body {
        font-family: 'Roboto', sans-serif;
    }

    .MuiTimeline-root {
        padding: 20px 0px 20px 17px !important;

        .MuiTimelineItem-missingOppositeContent:before {
            flex: none !important;
            padding: 0px !important;
        }

        .MuiTimelineContent-root {
            padding: 0px 0px 25px 20px !important;
        }
    }
`
export const Links = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    a {
        padding: 10px;
        margin-right: 10px;
        &:hover {
            text-decoration: none;
            background: ${darken(config.color.primary, 0.2)}
        }
        &:last-child {
            margin-right: 0px;
        }
    }
`
export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
`
export const Header = styled.div`
    position: relative;
    top: -180px;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const TitleName = styled.h1`
    font-size: 6em;
    text-align: center;
    font-family: 'Saira Extra Condensed', sans-serif !important;
    
    span.first-name {
        color: ${lighten(config.color.seconday, 0.3)};
    }

    span.last-name {
        color: ${config.color.primary}
    }
`

export const ProfileDescription = styled.h2`
    font-weight: lighter;
    font-size: 1.2em;
    color: ${config.color.seconday};
    text-align: center;
    padding: 20px;
`

export const ImageProfile = styled.img`
    border-radius: 300px;
    width: 220px;
    border: 10px solid white;
    height: auto;
`

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 3.2em;
    font-family: 'Saira Extra Condensed', sans-serif !important;
    margin-bottom: 20px;
`

export const MainContent = styled.main`
    padding: 80px 0px;
    color: ${config.color.seconday};
`
export const Background = styled.div`
    background-image: url("/background.jpeg");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    width: 100%;
`
