// app/author/[slug]/page.tsx
import PortablePost from '@/components/atom/PortablePost'
import {sanity} from '@/lib/sanity'
import {getAuthorDetail, getPostsByAuthor} from '@/lib/queries'
import {notFound} from 'next/navigation'
import urlFor from '@/lib/image'
import React from 'react'
import PopularPostCard from '@/components/atom/PopularPostCard'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Author',
  description: 'Explore our top notch authors whos providing high quality content just for you',
}

export default async function AuthorDetail({params}) {
  const author = await sanity.fetch(getAuthorDetail(params.slug))
  const posts = await sanity.fetch(getPostsByAuthor(params.slug))

  console.log(posts)

  if (!author) return notFound()

  return (
    <>
      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About {author.name}
                </h2>
                {author.bio && (
                  <div className="prose prose-sm sm:prose lg:prose-lg">
                    <PortablePost value={author.bio} />
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            alt=""
            src={urlFor(author.image).width(1000).url()}
          />
        </div>
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

        <h6 className="text-[20px] font-semibold text-[#3E3232]">Popular Posts by {author.name}</h6>
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
