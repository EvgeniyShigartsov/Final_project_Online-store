import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProductPage = () => {
  const location = useLocation()
  const params = useParams()
  console.log(location)
  console.log(params)

  return <h1>Product page</h1>
}

export default ProductPage