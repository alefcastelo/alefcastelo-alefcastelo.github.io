import React from 'react'
import { Container, GlobalStyle, Header, ImageProfile, ProfileDescription, TitleName } from '../styles/styled'

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
        <Header>
          <Container>
            <ImageProfile src="/profile.png" />
            <TitleName>
              <span className="first-name">Alef</span> <span className="last-name">Castelo</span>
            </TitleName>
            <ProfileDescription>Hey there, I'm Alef and I have 26 years old and more than 8 years working as Software Engineer. My focus on software development is on the core concepts, leaning things that can help me to make tradeoffs between technology with less pain possible.</ProfileDescription>
          </Container>
        </Header>
    </>
  )
}

export default Home
