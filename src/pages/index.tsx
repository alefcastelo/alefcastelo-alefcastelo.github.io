import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllPosts, Post } from '@/lib/posts-api'
import { Layout } from '@/components/layout'
import {
  PostItem,
  PostItemDate,
  PostItemDescription,
  PostItemTitle
} from '@/components/post'

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
              <PostItem key={key}>
                <a href={`/${lang}/posts/${slug}`}>
                  <PostItemTitle>{title}</PostItemTitle>
                  <PostItemDate>
                    Criado em {date.toLocaleDateString(lang, options)}
                  </PostItemDate>
                  <PostItemDescription>{seo.description}</PostItemDescription>
                </a>
              </PostItem>
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
