import { Pagination } from '@mui/material'
import { useRouter, usePathname } from 'next/navigation'

const Table = ({ data, columns, total }) => {
  const router = useRouter()
  const pathname = usePathname()
  const onChange = (_, page) => {
    router.replace(`${pathname}?limit=10&page=${page}`, {
      scroll: false
    })
  }

  return (
    <>
      <table className='w-full table-auto'>
        <thead>
          <tr>
            {columns?.map((item) => (
              <th
                key={item.key}
                className='px-[10px] py-[12px] font-semibold text-center border'
              >
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id + 'data'}>
              {columns.map((value) => (
                <td
                  className='border px-[10px] py-[6px]'
                  key={item.id + value.label}
                >
                  {renderTd(value, item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center mt-[40px]'>
        <Pagination
          onChange={onChange}
          count={Math.ceil(total / 10)}
          color='primary'
          shape='rounded'
        />
      </div>
    </>
  )
}

export default Table

const renderTd = (value, item) => {
  if (value.render) return value.render(item)
  let element = item
  const keys = value.key.split('.')
  keys.forEach((data) => {
    element = element[data]
  })
  return element
}
