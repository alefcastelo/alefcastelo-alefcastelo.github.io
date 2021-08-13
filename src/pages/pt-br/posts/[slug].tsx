import React from 'react'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage
} from 'next'
import { getAllPosts, getPostBySlug, Post } from '@/lib/posts-api'
import markdownToHtml from '@/lib/markdown-to-html'
import Head from 'next/head'
import { Layout } from '@/components/layout'
import { PostTitle } from '@/components/post'

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.seo.title} | Alef Castelo</title>
    </Head>
    <Layout>
      <PostTitle>{post.title}</PostTitle>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  </>
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
