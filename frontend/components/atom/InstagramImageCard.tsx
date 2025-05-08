import urlFor from '@/lib/image'

interface InstagramImageCardProps {
  image: string
}

export default function InstagramImageCard(props: InstagramImageCardProps) {
  return (
    <div className="w-[100px] h-[100px] overflow-hidden rounded-[12px]">
      <img
        src={urlFor(props.image).width(500).url()}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  )
}
