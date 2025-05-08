import urlFor from '../../lib/image'
import Link from 'next/link'

interface HeroCardProps {
  title: string
  mainImage: string
  description: string
  slug: string
}

export default function HeroCard(props: HeroCardProps) {
  console.log(props)
  return (
    <Link href={`post/${props.slug}`}>
      <div
        style={{
          backgroundImage: `url("${urlFor(props?.mainImage).width(500).url()}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative flex items-end justify-center w-[360px] h-[452px] rounded-[12px] text-white overflow-hidden"
      >
        {/* Centered Text */}
        <div className="z-10 bg-[#F5F5F5] text-black p-4 mx-2 mb-2 opacity-75 rounded-[16px]">
          <h3 className="text-[25px]">{props.title}</h3>
          <p className="mt-[10px] line-clamp-2">
            {props.description ||
              'Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. '}
          </p>
        </div>
      </div>
    </Link>
  )
}
