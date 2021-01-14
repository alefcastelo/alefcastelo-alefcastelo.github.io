import React from 'react'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage
} from 'next'
import { getAllPosts, getPostBySlug, Post } from '../../../lib/posts-api'
import markdownToHtml from '../../../lib/markdown-to-html'
import Head from 'next/head'
import Layout from '../../../components/layout'
import * as PagePostStyle from '../../../styles/pages/pt-br/posts/[slug].style'

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => (
  <Layout>
    <Head>
      <title>{post.seo.title} | Alef Castelo</title>
    </Head>
    <PagePostStyle.PostContainer>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </PagePostStyle.PostContainer>
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext<{ slug: string }>): Promise<{ props: Props }> => {
  const post: Post = getPostBySlug(params.slug, 'pt-br', [
    'title',
    'slug',
    'content',
    'seo',
    'lang'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts('pt-br', ['slug'])

  return {
    paths: posts.map(({ slug }: Post) => {
      return { params: { slug } }
    }),
    fallback: false
  }
}

export default PostPage
