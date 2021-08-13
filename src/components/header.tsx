import React from 'react'
import Link from 'next/link'
import { Container, Title } from './elements'

export const Header: React.FC = () => (
  <Container>
    <Title>
      <Link href="/">Alef Castelo</Link>
    </Title>
  </Container>
)
