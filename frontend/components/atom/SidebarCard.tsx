import urlFor from '@/lib/image'

interface SidebarCardProps {
  mainImage: string
  title: string
  subtitle: string
}

export default function SidebarCard(props: SidebarCardProps) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={urlFor(props?.mainImage).width(500).url()}
        alt=""
        width={90}
        height={90}
        className="max-h-[90px] max-w-[90px] rounded-[12px]"
      />
      <div>
        <h6 className="text-[16px] text-[#3E3232] font-semibold leading-[22px]">{props?.title}</h6>
        <div className="mt-[10px] text-[#3E3232] opacity-75">{props?.subtitle || 'Fitness'}</div>
      </div>
    </div>
  )
}
