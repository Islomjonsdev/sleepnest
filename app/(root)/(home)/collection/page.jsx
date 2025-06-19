import React from 'react'

const Collection = () => {
  return (
    <div className='mt-[50px]'>
      <div className='max-w-[1440px] mx-auto px-[20px]'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
              <div className='bg-[red] md:col-span-1'>salom</div>
              <div className='bg-[blue] md:col-span-2'>salom</div>
          </div>
      </div>
    </div>
  )
}

export default Collection