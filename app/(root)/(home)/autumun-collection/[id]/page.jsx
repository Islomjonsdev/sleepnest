"use client"

import { SecondProductData } from '@/api/secondProductData'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const Atumun = () => {
    const params = useParams()
    const id = params?.id
    const secondProducts = SecondProductData?.find((item) => item?.id.toString() === id)
    console.log(secondProducts);
  return (
    <div>SecondProducts Dynamic page</div>
  )
}

export default Atumun