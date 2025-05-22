// app/category/[slug]/page.tsx
import {sanity} from '@/lib/sanity'
import {getCategoryDetail, getPostsByCategory} from '@/lib/queries'
import urlFor from '@/lib/image'
import React from 'react'
import PopularPostCard from '@/components/atom/PopularPostCard'

export default async function AuthorDetail({params}) {
  const category = await sanity.fetch(getCategoryDetail(params.slug))
  const posts = await sanity.fetch(getPostsByCategory(params.slug))

  return (
    <>
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mb-30">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            alt="Winding mountain road"
            src={urlFor(category.mainImage).width(500).url()}
          />
        </div>

        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase  lg:text-4xl text-[#FC4308]">
              {category.title}
            </h2>
            <p className="mt-4">{category.description}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-[50px]">
        <svg
          width="4"
          height="10"
          viewBox="0 0 4 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="10" rx="2" fill="#F81539" />
        </svg>

        <h6 className="text-[20px] font-semibold text-[#3E3232]">
          Posts based on {category?.title}
        </h6>
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
    </>
  )
}
