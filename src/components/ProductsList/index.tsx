import { Product } from "../Product/indext";
import { Products } from "./styles";

import { ProductsData } from '../../db/productsData'

export function ProductsList(){
  return (
    <Products>
      <h3>Nossos cafés</h3>

      <div className="products-list">
        <Product/>
      </div>
    </Products>
  )
}