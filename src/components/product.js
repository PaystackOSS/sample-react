import React from "react"

const Product = (product) => {
  return (
    <div>
      <div>
        <img src={product.image} alt="product" />
      </div>
      <div>{product.price}</div>
      <div>{product.title}</div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
