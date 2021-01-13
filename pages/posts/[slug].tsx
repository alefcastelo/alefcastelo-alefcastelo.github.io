import Layout from '../../components/layout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdown-to-html'

export default function Doc ({ post }) {
  return (
      <>
        <Layout>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Layout>
      </>
  )
}

export async function getStaticProps ({ params }) {
  const post: any = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
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

export async function getStaticPaths () {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
