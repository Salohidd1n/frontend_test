import UserList from '@/components/userList'
import { useUserList } from '@/services/user.service'

export default async function Users({ searchParams }) {
  const data = await useUserList(searchParams)
  return (
    <main className='container mx-auto px-4 py-[40px]'>
      <UserList users={data} />
    </main>
  )
}
