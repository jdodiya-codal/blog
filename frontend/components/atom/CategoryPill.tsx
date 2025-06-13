import Link from 'next/link'
import urlFor from '../../lib/image'

interface CategoryPillProps {
  title: string
  mainImage: string
  slug: string
}

export default function CategoryPill(props: CategoryPillProps) {
  console.log(props)
  return (
    <Link href={`/category/${props.slug}`}>
      <div
        style={{
          backgroundImage: `url("${urlFor(props.mainImage).width(500).url()}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative flex items-center justify-center w-[170px] h-[48px] rounded-[12px] text-white overflow-hidden"
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0  backdrop-blur-xs z-0" />

        {/* Centered Text */}
        <div className="z-10">#{props.title}</div>
      </div>
    </Link>
  )
}
