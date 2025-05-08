// components/PortablePost.tsx (optional, or inline in your page)

import {PortableText} from '@portabletext/react'

interface Props {
  value: any // You can also define a stricter type if needed
}

export default function PortablePost({value}: Props) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          h1: ({children}) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
          h2: ({children}) => <h2 className="text-xl font-semibold mb-3">{children}</h2>,
          h3: ({children}) => <h3 className="text-lg font-semibold mb-2">{children}</h3>,
          normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
        },
        list: {
          bullet: ({children}) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
          number: ({children}) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
        },
        listItem: {
          bullet: ({children}) => <li className="mb-2">{children}</li>,
          number: ({children}) => <li className="mb-2">{children}</li>,
        },
        marks: {
          link: ({value, children}) => (
            <a
              href={value?.href}
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        },
      }}
    />
  )
}
