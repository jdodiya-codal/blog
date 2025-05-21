import Link from 'next/link'

const categories = [
  {name: 'Technology', slug: 'technology', description: 'The latest in tech and innovation.'},
  {name: 'Design', slug: 'design', description: 'Creative insights, UI/UX, and product thinking.'},
  {name: 'Development', slug: 'development', description: 'Tutorials, tips, and dev guides.'},
  {name: 'Startup', slug: 'startup', description: 'Entrepreneurship, growth, and strategy.'},
  {name: 'Marketing', slug: 'marketing', description: 'Growth hacks and digital marketing.'},
  {name: 'Productivity', slug: 'productivity', description: 'Get more done and stay focused.'},
]

const CategoriesPage = () => {
  return (
    <div className="mt-10 min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="bg-[linear-gradient(90deg,_rgba(253,29,29,1)_0%,_rgba(0,0,0,1)_100%)] py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-white">Categories</h1>
        <p className="max-w-2xl mx-auto text-lg text-white">
          Explore articles by category. Find content that matters to you.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category, idx) => (
            <Link
              href={`/blog/category/${category.slug}`}
              key={idx}
              className="block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:bg-yellow-50"
            >
              <h2 className="text-xl font-semibold mb-2 text-yellow-700">{category.name}</h2>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CategoriesPage
