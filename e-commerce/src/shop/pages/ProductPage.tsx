import { useParams } from "react-router-dom"
import { initialData } from "../../seed/seed";

export const ProductPage = () => {
  
  const { slug } = useParams();

  const product = initialData.products.find(product=>product.slug === slug);
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 mt-10 px-5">
      
      <div className="col-span-3 ">
        <img src={`/products/${product?.images[0]}`} alt="" width={500} height={500}/>
      </div>
      
      <div className="col-span-2">
        <span>{product?.title}</span>
      </div>

    </div>
  )
}
