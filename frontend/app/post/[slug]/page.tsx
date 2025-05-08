// app/post/[slug]/page.tsx
import PortablePost from '@/components/atom/PortablePost'
import {sanity} from '@/lib/sanity'
import {getAdvertisingForArticleQuery, getPostBySlugQuery, getPostsQuery} from '@/lib/queries'
import {Post} from '@/types/Post'
import {notFound} from 'next/navigation'
import urlFor from '@/lib/image'
import React from 'react'
import SidebarCard from '@/components/atom/SidebarCard'
import AdvertisingCard from '@/components/atom/AdvertisingCard'
import PopularPostCard from '@/components/atom/PopularPostCard'

interface Props {
  params: {slug: string}
}

export default async function PostDetail({params}: Props) {
  const post: Post = await sanity.fetch(getPostBySlugQuery(params.slug))
  const posts = await sanity.fetch(getPostsQuery)
  const advertising = await sanity.fetch(getAdvertisingForArticleQuery)
  console.log(advertising)

  if (!post) return notFound()

  return (
    <div className="mt-[50px] flex gap-8">
      <div className="w-[70%]  ">
        <div className="bg-[#F5F5F5] p-4 rounded-[12px]">
          <h1 className="text-[36px] font-medium mb-2">{post.title}</h1>
          <img
            src={urlFor(post.mainImage).width(500).url()}
            alt=""
            width={1000}
            height={450}
            className="max-h-[450px] max-w-full rounded-[12px]"
          />
          <div className="justify-center flex gap-20 mt-[20px]">
            <p className="text-gray-500 text-sm mb-4">
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(post.publishedAt))}
            </p>
            <p className="text-gray-500 text-sm mb-4">Fitness</p>
          </div>

          {post.body && (
            <div className="prose prose-sm sm:prose lg:prose-lg">
              <PortablePost value={post.body} />
            </div>
          )}
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
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-[30%]">
        <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-[12px]">
          <img
            src={urlFor(post.author.image).width(500).url()}
            alt=""
            width={90}
            height={90}
            className="max-h-[90px] max-w-[90px] rounded-[12px]"
          />
          <div>
            <h6 className="text-[16px] text-[#3E3232] font-semibold leading-[22px]">
              {post.author.name}
            </h6>
            <button className="mt-[10px] px-[30px] py-[10px] rounded-[12px] text-white bg-[#F81539] text-[14px] opacity-75">
              Follow
            </button>
          </div>
        </div>

        <div className="rounded-[12px] flex flex-col mt-[40px] gap-6 bg-[#F5F5F5] p-4">
          <div className="flex items-center gap-2">
            <svg
              width="4"
              height="10"
              viewBox="0 0 4 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="4" height="10" rx="2" fill="#F81539" />
            </svg>

            <h6 className="text-[20px] font-semibold text-[#3E3232]">Top Posts</h6>
          </div>
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <SidebarCard
                title={post.title}
                mainImage={post.mainImage}
                subtitle={post.description}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="mt-[40px] flex flex-col gap-6">
          {advertising.map((advertise, index) => (
            <React.Fragment key={index}>
              <AdvertisingCard
                title={advertise.title}
                image={advertise.image}
                ctaUrl={advertise.ctaUrl}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
