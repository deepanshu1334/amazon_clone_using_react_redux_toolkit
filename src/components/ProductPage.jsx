import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  //through useprams we can access our id
  const {id}=useParams();
  return (
    <div>ProductPage {id} </div>
  )
}

export default ProductPage