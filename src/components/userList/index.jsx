'use client'

import { useRouter } from 'next/navigation'
import Table from '../table'
import Image from 'next/image'

const columns = [
  {
    key: 'image',
    render: (item) => (
      <div className='w-[50px] h-[50px] mx-auto'>
        <Image
          className='object-contain'
          src={item.image}
          width='50'
          height='50'
          alt={item.firstName}
        />
      </div>
    ),
    label: 'Photo'
  },
  {
    key: 'firstName',
    label: 'First name'
  },
  {
    key: 'lastName',
    label: 'Last name'
  },
  {
    key: 'age',
    label: 'Age'
  },
  {
    key: 'email',
    label: 'Email'
  },
  {
    key: 'address.address',
    label: 'Address'
  }
]

const UserList = ({ users }) => {
  const router = useRouter()
  const onClick = () => {
    router.refresh()
  }

  return (
    <>
      <div className='flex items-center justify-between mb-[25px]'>
        <h1 className='text-[30px] leading-[40px] font-semibold'>Users</h1>
        <button
          onClick={onClick}
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center'
        >
          <span>Обновить</span>
        </button>
      </div>

      <Table data={users.users} total={users.total} columns={columns} />
    </>
  )
}

export default UserList
