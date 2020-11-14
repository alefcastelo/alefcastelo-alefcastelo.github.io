import React from 'react'
import Layout from '../components/Layout'
import * as S from '../styles/styled'

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <S.Background />
        <S.Header>
          <S.Container>
            <S.ImageProfile src="/profile.png" />
            <S.TitleName>
            <span className="first-name">Alef</span> <span className="last-name">Castelo</span>
            </S.TitleName>
            <S.ProfileDescription>Hey there, I&apos;m Alef and I have 26 years old and more than 8 years working as Software Engineer. My focus on software development is on the core concepts, leaning things that can help me to make tradeoffs between technology with less pain possible.</S.ProfileDescription>
          </S.Container>
        </S.Header>
      </Layout>
    </>
  )
}

export default Home
