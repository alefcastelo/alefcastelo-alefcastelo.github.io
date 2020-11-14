
export interface Experience {
    title: string
    description: string
    from: string
    to: string
    type: string
    region: string
}

export interface ExperienceGroup {
  company: string
  image: string
  history: Experience[]
}
