import { useParams } from "react-router-dom";
import { initialData } from "../../seed/seed"
import { ProductGrid } from "../../ui";

export const CategoryPage = () => {
  
  const {gender} = useParams();

  const products = initialData.products.filter(product=>product.gender===gender);
  
  return (
    <div className="p-10">

      <ProductGrid products={products}/>

    </div>
  )
}
