import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllPosts, Post } from '../lib/posts-api'
import Layout from '../components/layout'
import * as PageIndexStyle from '../styles/pages/index.style'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <PageIndexStyle.Content>
        {posts.map(
          ({ slug, title, lang, seo, date: dateString }: Post, key: number) => {
            const date = new Date(dateString)
            const options = { year: 'numeric', month: 'long', day: 'numeric' }

            return (
              <PageIndexStyle.PostItem key={key}>
                <PageIndexStyle.PostItemTitle href={`/${lang}/posts/${slug}`}>
                  {title}
                </PageIndexStyle.PostItemTitle>
                <PageIndexStyle.PostItemDate>
                  Created at {date.toLocaleDateString(lang, options)}
                </PageIndexStyle.PostItemDate>
                <PageIndexStyle.PostItemDescription>
                  {seo.description}
                </PageIndexStyle.PostItemDescription>
              </PageIndexStyle.PostItem>
            )
          }
        )}
      </PageIndexStyle.Content>
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
