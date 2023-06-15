import { Product } from "../Product/indext";
import { Products } from "./styles";

export function ProductsList(){
  return (
    <Products>
      <h3>Nossos cafés</h3>

      <div className="products-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </Products>
  )
}