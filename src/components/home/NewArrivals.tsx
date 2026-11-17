import { products } from "@/src/constants/products"
import ProductCard from "../product/ProductCard"


const NewArrivals = () => {
  return (
    <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-medium">New Arrivals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6 gap-6">
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default NewArrivals