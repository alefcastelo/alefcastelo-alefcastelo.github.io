import { lighten } from '@material-ui/core'
import styled from 'styled-components'
import { config } from '../../styles/config'

export const ExperienceCompanyTitle = styled.div`
    font-weight: bold;
    color: ${config.color.seconday};
    padding: 0px;
    margin: 0px;
    font-size: 1.4em;
    font-family: 'Saira Extra Condensed', sans-serif !important;
`
export const ExperienceCompanyName = styled.div`
    color: ${config.color.primary};
    font-weight: bold;
    font-size: 2em;
    font-family: 'Saira Extra Condensed', sans-serif !important;
`
export const ExperienceItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
    }
`
export const ExperienceItemContent = styled.div``
export const ExperienceCompanyDescription = styled.div``
export const ExperienceCompanyType = styled.div`
    margin-bottom: 10px;
`
export const ExperienceContent = styled.div`
    width: 100%;
`
export const ExperienceGroupItem = styled.div`
    display: flex;
    border-bottom: 1px solid ${lighten(config.color.seconday, 0.8)};
    margin-bottom: 30px;
    &:last-child {
        border-bottom: 0px;
    }
`
export const CompanyImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`
