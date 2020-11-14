import React from 'react'
import Layout from '../../components/Layout'
import * as S from '../../styles/styled'
import { ExperienceGroup } from '../../types'
import ExperienceItem from './components/experience-group'
import data from './data.json'

const Experience: React.FC = () => {
  return (
    <>
      <Layout>
        <S.MainContent>
          <S.Container>
            <S.SectionTitle>Experience</S.SectionTitle>
            {data.map((experience: ExperienceGroup, index: number) => (
              <ExperienceItem key={index} experienceGroup={experience} isVisible={true} />
            ))}
          </S.Container>
        </S.MainContent>
      </Layout>
    </>
  )
}

export default Experience
