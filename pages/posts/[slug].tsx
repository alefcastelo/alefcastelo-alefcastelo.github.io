import React from 'react'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage
} from 'next'
import { getAllPosts, getPostBySlug, Post } from '../../lib/api'
import markdownToHtml from '../../lib/markdown-to-html'

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext<{ slug: string }>): Promise<{ props: Props }> => {
  const post: Post = getPostBySlug(params.slug, ['title', 'slug', 'content'])
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
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(({ slug }: Post) => {
      return { params: { slug } }
    }),
    fallback: false
  }
}

export default PostPage
