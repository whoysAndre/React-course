import { Link } from "react-router-dom"
import { Product } from "../../../interfaces"
import { useState } from "react";

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {
  
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  
  return (
    <div className="rounded-md  fade-in">
      <Link to={`/product/${product.slug}`} >
        <img
          src={`/products/${displayImage}`}
          className="w-full object-cover rounded-md shadow-md"
        />
      </Link>


      <div className="p-4 flex flex-col">
        <Link to={`/product/${product.slug}`} className="hover:text-blue-800">
          {product.title}
        </Link>

        <span className="font-bold">s/.{product.price}</span>
      </div>

    </div>
  )
}
