'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {CiSearch} from 'react-icons/ci'

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm.trim()) {
      // Navigate to search page with query param
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
      // setSearchTerm('')
    }
  }

  return (
    <nav className="z-90 flex justify-between items-center">
      <div>
        <Link href={'/'}>
          <h1 className="text-[22px] text-[#FC4308] font-bold">Impilo Pop</h1>
        </Link>
      </div>

      <div>
        <ul className="flex gap-8">
          <Link href={'/category'}>
            <li className="text-[16px] text-black cursor-pointer hover:text-[#FC4308]">
              Categories
            </li>
          </Link>
          <Link href={'/post'}>
            <li className="text-[16px] text-black cursor-pointer hover:text-[#FC4308]">Pages</li>
          </Link>
          <Link href={'/contact'}>
            <li className="text-[16px] text-black cursor-pointer hover:text-[#FC4308]">
              Contact Us
            </li>
          </Link>
          <Link href={'/about'}>
            <li className="text-[16px] text-black cursor-pointer hover:text-[#FC4308]">About Us</li>
          </Link>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search Anything"
          className="text-[14px] border border-gray-300 rounded-md px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer ml-2 p-2 block rounded-md bg-[#FC4308] text-center text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <CiSearch />
        </button>
      </form>
    </nav>
  )
}
