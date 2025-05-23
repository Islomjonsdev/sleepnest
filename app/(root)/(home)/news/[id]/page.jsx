"use client"

import { newsData } from '@/api/newsData'
import { useParams } from 'next/navigation'
import React from 'react'

const NewsDynamicPage = () => {
    const params = useParams()
    const id = params?.id
    
    const newsResult = newsData?.find((data) => data?.id.toString() === id);
    console.log(newsResult);
  return (
    <div>NewsDynamicPage</div>
  )
}

export default NewsDynamicPage