import Clean from '@/components/shared/clean'
import Hero from '@/components/shared/hero'
import Products from '@/components/shared/products'
import Service from '@/components/shared/service'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Service />
      <Clean />
      <Products />
    </>
  )
}

export default page