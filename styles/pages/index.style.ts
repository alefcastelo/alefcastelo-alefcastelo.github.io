import styled from 'styled-components'

export const Content = styled.div`
  margin-top: ${props => props.theme.size.xl}rem;
`

export const PostItem = styled.div``

export const PostItemTitle = styled.a`
  font-size: ${props => props.theme.size.xl}rem;
  font-weight: bold;
  color: ${props => props.theme.palette.dark};
`

export const PostItemDate = styled.div`
  margin-top: 0.5rem;
  font-weight: 400;
`

export const PostItemDescription = styled.div`
  font-weight: 300;
`
