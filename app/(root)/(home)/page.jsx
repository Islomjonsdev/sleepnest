import AutumunCollection from '@/components/shared/autumun-collection'
import Clean from '@/components/shared/clean'
import Hero from '@/components/shared/hero'
import Material from '@/components/shared/material'
import Products from '@/components/shared/products'
import Quality from '@/components/shared/quality'
import Service from '@/components/shared/service'
import SummerCollection from '@/components/shared/summer-collection'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Service />
      <Clean />
      <Products />
      <Quality />
      <AutumunCollection />
      <Material />
      <SummerCollection />
    </>
  )
}

export default page