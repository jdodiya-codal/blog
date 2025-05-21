import PostListPage from '@/components/PostListPage'
import {getPostsQuery} from '@/lib/queries'
import {sanity} from '@/lib/sanity'

export default async function PostList() {
  const posts = await sanity.fetch(getPostsQuery)

  return <PostListPage posts={posts} />
}
