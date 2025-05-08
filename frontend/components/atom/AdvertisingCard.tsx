import urlFor from '../../lib/image'
import Link from 'next/link'

interface AdvertisingCardProps {
  title: string
  image: string
  ctaUrl: string
}

export default function AdvertisingCard(props: AdvertisingCardProps) {
  return (
    <Link href={`${props?.ctaUrl}`}>
      <div
        style={{
          backgroundImage: `url("${urlFor(props?.image).width(500).url()}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative flex items-center justify-center w-[360px] h-[180px] rounded-[12px] text-white overflow-hidden"
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0  backdrop-blur-xs z-0" />
        <h3 className="text-[20px] p-4 z-10">{props.title}</h3>
      </div>
    </Link>
  )
}
