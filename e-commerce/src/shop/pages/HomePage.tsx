
import { initialData } from "../../seed/seed"
import { ProductGrid } from "../../ui"



export const HomePage = () => {
  
  const products = initialData.products;
  
  return (
    <div className="p-10">
      <ProductGrid
        products={ products }
      />
    </div>
  )
}
