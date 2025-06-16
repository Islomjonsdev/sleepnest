import React from 'react'
import Form from './form'

const Connection = () => {
  return (
    <div>
        <div className='max-w-[1440px] w-full mx-auto px-[20px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid:cols-2 gap-[30px]'>
                <div>
                    <Form />
                </div>
                <div className='bg-[blue]'>2</div>
            </div>
        </div>
    </div>
  )
}

export default Connection