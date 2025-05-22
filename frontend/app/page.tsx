import {sanity} from '@/lib/sanity'
import {getPostsQuery, getCategoriesQuery} from '@/lib/queries'
import CategoryPill from '@/components/atom/CategoryPill'
import HeroCard from '@/components/atom/HeroCard'
import React from 'react'
import PopularPostCard from '@/components/atom/PopularPostCard'
import GridCard from '@/components/atom/GridCard'

export default async function Home() {
  const categories = await sanity.fetch(getCategoriesQuery)
  const posts = await sanity.fetch(getPostsQuery)

  return (
    <div>
      <div className="rounded-[12px] flex mt-[40px] gap-6 p-2 bg-[#F5F5F5]">
        {categories.map((card, index) => (
          <React.Fragment key={index}>
            <CategoryPill title={card.title} mainImage={card.mainImage} />
          </React.Fragment>
        ))}
      </div>

      <div className="rounded-[12px] flex mt-[40px] gap-6">
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            <HeroCard
              title={post.title}
              mainImage={post.mainImage}
              description={post.description}
              slug={post.slug.current}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-[40px]">
        <svg
          width="4"
          height="10"
          viewBox="0 0 4 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="10" rx="2" fill="#F81539" />
        </svg>

        <h6 className="text-[20px] font-semibold text-[#3E3232]">Popular Posts</h6>
      </div>
      <div className="rounded-[12px] flex mt-[40px] gap-6 ">
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            <PopularPostCard
              title={post.title}
              mainImage={post.mainImage}
              description={post.description}
              author={post.author}
              publishedAt={post.publishedAt}
              slug={post.slug.current}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-[40px]">
        <svg
          width="4"
          height="10"
          viewBox="0 0 4 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="10" rx="2" fill="#F81539" />
        </svg>

        <h6 className="text-[20px] font-semibold text-[#3E3232]">New Posts</h6>
      </div>
      <div className="rounded-[12px] flex mt-[40px] gap-6 ">
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            <GridCard
              title={post.title}
              mainImage={post.mainImage}
              description={post.description}
              author={post.author}
              publishedAt={post.publishedAt}
              slug={post.slug.current}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
