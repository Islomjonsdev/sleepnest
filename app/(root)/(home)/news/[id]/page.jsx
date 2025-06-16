"use client"

import { newsData } from '@/api/newsData'
import Connection from '@/components/shared/connection'
import { useParams } from 'next/navigation'
import React from 'react'

const NewsDynamicPage = () => {
    const params = useParams()
    const id = params?.id
    
    const newsResult = newsData?.find((data) => data?.id.toString() === id);
    console.log(newsResult);
  return (
    <div className='max-w-[1440px] mx-auto px-[20px]'>NewsDynamicPage

        <Connection />
    </div>
  )
}

export default NewsDynamicPage