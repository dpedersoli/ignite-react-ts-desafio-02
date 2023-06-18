import { Product } from "../Product/indext";
import { Products } from "./styles";

import { ProductsData } from '../../db/productsData'

export function ProductsList(){
  return (
    <Products>
      <h3>Nossos cafés</h3>

      <div className="products-list">
        {ProductsData.map((product) => {
          return (
            <Product
            id={product.id}
            image={product.image}
            title={product.title}
            tag={product.tag}
            description={product.description}
            price={product.price}
            />
          )
        })
        }
      </div>
    </Products>
  )
}