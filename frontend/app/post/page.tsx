import PostListPage from '@/components/PostListPage'
import {getPostsQuery} from '@/lib/queries'
import {sanity} from '@/lib/sanity'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'List of all the posts',
}

export default async function PostList() {
  const posts = await sanity.fetch(getPostsQuery)

  return <PostListPage posts={posts} />
}
