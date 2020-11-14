import React, { useState } from 'react'
import * as S from '../styles/styled'
import { IconButton } from '@material-ui/core'
import { VisibilityOff as VisibilityOffIcon, Visibility as VisibilityIcon } from '@material-ui/icons'
import { ExperienceGroup, Experience } from '../types'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'

interface ExperienceItemInterface {
  isVisible?: boolean
  experienceGroup: ExperienceGroup
}

const ExperienceItem: React.FC<ExperienceItemInterface> = ({ isVisible, experienceGroup }: ExperienceItemInterface) => {
  const [visible, setVisible] = useState<boolean>(isVisible ?? false)
  const handlerVisibleContent = () => setVisible(!visible)
  const handlerFormatDate = (dateString: string) => {
    const date = new Date(dateString)
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
  }

  return (
    <>
      <S.ExperienceGroupItem>
        <S.ExperienceContent>
          <S.ExperienceItemHeader>
            <div>
              <S.CompanyImage src={experienceGroup.image} />
              <S.ExperienceCompanyName>{ experienceGroup.company }</S.ExperienceCompanyName>
            </div>
            <IconButton onClick={handlerVisibleContent}>
              {visible === true ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </S.ExperienceItemHeader>
          { experienceGroup.history.length > 0 && (
            <Timeline>
              { visible && experienceGroup.history.map((experience: Experience, index: number) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot />
                    { (experienceGroup.history.length - 2) === index && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <S.ExperienceItemContent>
                      <S.ExperienceCompanyTitle>{ experience.title }</S.ExperienceCompanyTitle>
                      <S.ExperienceCompanyType>{ experience.type } - { experience.region }</S.ExperienceCompanyType>
                      <S.ExperienceCompanyType>{ handlerFormatDate(experience.from) }{ experience.to !== null ? (<> - { handlerFormatDate(experience.to) }</>) : ' - Present'}</S.ExperienceCompanyType>
                      <S.ExperienceCompanyDescription dangerouslySetInnerHTML={{ __html: experience.description }}></S.ExperienceCompanyDescription>
                    </S.ExperienceItemContent>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          )}
        </S.ExperienceContent>
      </S.ExperienceGroupItem>
    </>
  )
}

export default ExperienceItem
