import urlFor from '@/lib/image'
import Link from 'next/link'

const PostListPage = ({posts}) => {
  return (
    <div className="mt-10 min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="bg-[linear-gradient(90deg,_rgba(253,29,29,1)_0%,_rgba(0,0,0,1)_100%)] py-16 px-6 text-center">
        <h1 className="text-4xl text-white font-extrabold mb-4">Latest Blog Posts</h1>
        <p className="max-w-2xl mx-auto text-lg text-white">
          Dive into insights, ideas, and inspiration from our team.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={index}
              className="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative h-56 w-full">
                <img
                  src={urlFor(post.mainImage).width(500).url()}
                  alt=""
                  width={44}
                  height={44}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover w-full"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-yellow-700">{post.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PostListPage
