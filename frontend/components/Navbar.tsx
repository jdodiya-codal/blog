import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
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
      <input
        type="text"
        placeholder="Search Anything"
        className="text-[14px] border border-gray-300 rounded-md px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </nav>
  )
}
