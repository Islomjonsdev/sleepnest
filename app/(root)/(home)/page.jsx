import Clean from '@/components/shared/clean'
import Hero from '@/components/shared/hero'
import Products from '@/components/shared/products'
import Quality from '@/components/shared/quality'
import Service from '@/components/shared/service'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Service />
      <Clean />
      <Products />
      <Quality />
    </>
  )
}

export default page