import urlFor from '../../lib/image'

interface GridCardProps {
  title: string
  mainImage: string
  description: string
  publishedAt: string
  author: any
}

export default function GridCard(props: GridCardProps) {
  console.log(props)
  return (
    <div className="flex bg-white max-w-[50%] max-h-[389px] rounded-[12px] p-[10px]">
      <img
        src={urlFor(props?.mainImage).width(500).url()}
        alt=""
        width={360}
        height={190}
        className="max-w-full max-h-[190px] rounded-[12px]"
      />
      <div>
        <h3 className="text-[16px] font-semibold mt-[20px]">{props.title}</h3>
        <p className="mt-[10px] line-clamp-2 opacity-75 text-[14px] leading-[20px]">
          {props.description ||
            'Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. '}
        </p>

        <div className="px-4 items-center gap-4 flex mt-[20px] rounded-[12px] bg-[#F5F5F5] h-[60px] max-w-full">
          <img
            src={urlFor(props.author.image).width(500).url()}
            alt=""
            width={44}
            height={44}
            className="max-h-[44px] max-w-[44px] rounded-[12px]"
          />
          <div>
            <h6 className="text-[14px] font-semibold leading-[22px]">{props.author.name}</h6>
            <p className="text-[12px] opacity-75 leading-[18px]">
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(props.publishedAt))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
