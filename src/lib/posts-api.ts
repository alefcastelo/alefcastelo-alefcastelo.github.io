import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
  title: string
  slug: string
  seo?: {
    title?: string
    description?: string
  }
  lang: string
  date: Date
  content: string
}

const __POSTS_DIR__ = join(process.cwd(), 'src', 'posts')

export const getPostSlugs = (lang: string): string[] => {
  return fs.readdirSync(join(__POSTS_DIR__, lang))
}

export const getPostBySlug = (
  slug: string,
  lang: string,
  fields = []
): Post => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(__POSTS_DIR__, `/${lang}/${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const post = {}

  fields.forEach(field => {
    if (field === 'slug') {
      post[field] = realSlug
    }

    if (field === 'content') {
      post[field] = content
    }

    if (data[field]) {
      post[field] = data[field]
    }
  })

  return post as Post
}

export const getAllPosts = (lang: string, fields = []): Post[] => {
  return getPostSlugs(lang)
    .map(slug => getPostBySlug(slug, lang, fields))
    .sort((post1, post2) => {
      if (post1.date > post2.date) {
        return -1
      }

      if (post1.date < post2.date) {
        return 1
      }

      return 0
    })
}
