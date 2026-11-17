import FrontendLayout from '@/src/components/layouts/FrontendLayout'
import FilterOptions from './FilterOptions'
import SortOptions from './SortOptions'
import { products } from '@/src/constants/products'
import ProductCard from '@/src/components/product/ProductCard'


const ProductsPage = () => {
  return (
    <FrontendLayout>
        <div className='my-6'>
         <div className='flex flex-col sm:flex-row gap-5 my-10'>
             <FilterOptions />
             <div className='flex-1'>
              <SortOptions />
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6 gap-6'>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
             </div>
         </div>
        </div>
    </FrontendLayout>
  )
}

export default ProductsPage