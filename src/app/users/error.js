'use client'

export default function Error({ error, reset }) {
  return (
    <div className='flex items-center justify-center h-[100vh] flex-col gap-2'>
      <h2 className='text-[25px] leading-[32px] font-semibold'>
        Something went wrong!
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
