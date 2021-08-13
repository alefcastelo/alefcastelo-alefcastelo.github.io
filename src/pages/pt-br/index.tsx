import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllPosts, Post } from '@/lib/posts-api'
import { Layout } from '@/components/layout'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <div>
        {posts.map(
          ({ slug, title, lang, seo, date: dateString }: Post, key: number) => {
            const date = new Date(dateString)
            const options: Intl.DateTimeFormatOptions = {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }

            return (
              <div key={key}>
                <h3>
                  <a href={`/${lang}/posts/${slug}`}>{title}</a>
                </h3>
                <span>Created at {date.toLocaleDateString(lang, options)}</span>
                <div>{seo.description}</div>
              </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts('pt-br', ['title', 'slug', 'lang', 'seo', 'date'])

  return {
    props: {
      posts
    }
  }
}

export default Home
