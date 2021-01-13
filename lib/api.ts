import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
  title: string
  slug: string
  date: Date
  content: string
}

const __POSTS_DIR__ = join(process.cwd(), '_posts')

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(__POSTS_DIR__)
}

export const getPostBySlug = (slug: string, fields = []): Post => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(__POSTS_DIR__, `${realSlug}.md`)
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

export const getAllPosts = (fields = []): Post[] => {
  return getPostSlugs().map(slug => getPostBySlug(slug, fields))
}
