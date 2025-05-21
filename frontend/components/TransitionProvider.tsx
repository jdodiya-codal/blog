// components/TransitionProvider.tsx
'use client'

import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function TransitionProvider({children}: {children: React.ReactNode}) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 600) // delay for fade out

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500">
          <p className="text-2xl font-semibold text-[#FC4308] animate-pulse">Loading...</p>
        </div>
      )}
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {children}
      </div>
    </>
  )
}
