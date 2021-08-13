import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllPosts, Post } from '@/lib/posts-api'
import { Layout } from '@/components/layout'
import { PostListDate, PostListTitle } from '@/components/post'

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
                <PostListTitle>
                  <a href={`/${lang}/posts/${slug}`}>{title}</a>
                </PostListTitle>
                <PostListDate>
                  Criado em {date.toLocaleDateString(lang, options)}
                </PostListDate>
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
