import Image from 'next/image'
import Link from 'next/link'

const SearchResultsPage = ({query, posts}) => {
  return (
    <div className="mt-10 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[linear-gradient(90deg,_rgba(253,29,29,1)_0%,_rgba(0,0,0,1)_100%)] py-16 px-6 text-center shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Search results for <span className="italic text-white">“{query}”</span>
        </h1>
        <p className="text-white text-lg">
          We found {posts.length} article{posts.length !== 1 && 's'} matching your query.
        </p>
      </section>

      {/* Results Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-12">
            No results found. Try a different keyword.
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <Link
                href={`/blog/${post.slug.current}`}
                key={idx}
                className="group relative block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

import {sanity} from '@/lib/sanity'
import {getSearchResultsQuery} from '@/lib/queries'

interface Props {
  searchParams: {q?: string}
}

export default async function SearchPage({searchParams}: Props) {
  const query1 = searchParams.q || ''
  const posts = query1 ? await sanity.fetch(getSearchResultsQuery, {query1}) : []

  return <SearchResultsPage query={query1} posts={posts} />
}
