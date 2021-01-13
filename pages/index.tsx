import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllPosts, Post } from '../lib/api'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(({ slug, title }: Post, key: number) => (
        <div key={key}>
          {slug} - {title}
        </div>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'slug'])

  return {
    props: {
      posts
    }
  }
}

export default Home
