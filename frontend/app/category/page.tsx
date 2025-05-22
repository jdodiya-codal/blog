import urlFor from '@/lib/image'
import {getCategoriesQuery} from '@/lib/queries'
import {sanity} from '@/lib/sanity'
import Link from 'next/link'

const CategoriesPage = async () => {
  const categories = await sanity.fetch(getCategoriesQuery)
  return (
    <div className="mt-10 min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="bg-[linear-gradient(90deg,_rgba(253,29,29,1)_0%,_rgba(0,0,0,1)_100%)] py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-white">Categories</h1>
        <p className="max-w-2xl mx-auto text-lg text-white">
          Explore articles by category. Find content that matters to you.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category, idx) => (
            <Link
              href={`/category/${category.slug.current}`}
              key={idx}
              className="block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all hover:bg-yellow-50"
            >
              <div className="relative w-full">
                <img
                  src={urlFor(category?.mainImage).width(500).url()}
                  alt=""
                  width={44}
                  height={44}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover w-full h-56 rounded-xl"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-yellow-700">{category.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CategoriesPage
