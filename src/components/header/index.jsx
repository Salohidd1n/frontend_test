import Link from 'next/link'

export default function Header() {
  return (
    <header className='container mx-auto px-4 py-[40px] flex gap-4 border-b'>
      <Link className='text-[18px] leading-[24px]' href='/'>
        Home
      </Link>
      <Link className='text-[18px] leading-[24px]' href='/users'>
        Users
      </Link>
    </header>
  )
}
