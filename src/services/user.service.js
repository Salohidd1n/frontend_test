export async function useUserList({ page = 1, limit = 10 }) {
  const res = await fetch(
    `${process.env.BASE_URL}users?limit=${limit}&skip=${(page - 1) * limit}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
