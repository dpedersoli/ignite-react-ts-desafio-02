import { ShoppingCart } from "phosphor-react";

import { Actions, Background, Bottom, Cart } from "./styles";
import { useState } from "react";
// import { useForm } from "react-hook-form";

interface Product {
  id: number;
  image: string;
  tag: string[];
  title: string;
  description: string;
  price: string;
}

export function Product({id, image, tag, title, description, price}: Product) {
  const [numberOfItems, setNumberOfItems] = useState(1);

  // const { register, handleSubmit, watch } = useForm();
  
  function addOne(e: any){
    e.preventDefault();

    if(numberOfItems >= 0){
      setNumberOfItems(numberOfItems + 1)
    }
  }
  
  function deleteOne(e: any){
    e.preventDefault();
    
    if(numberOfItems > 0){
      setNumberOfItems(numberOfItems - 1)
    }
  }

  const handleAddItemsToShoppingCart = () => {
    console.log('nádegas')
  }

  // const quantity = watch('quantity')


  return (
    <Background key={id}>
      <img src={image} alt="" />
      <div className="tags">{tag.map((data) => ( <p className="tag">{data}</p> ))}</div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <form > {/* onSubmit={handleSubmit(handleAddItemsToShoppingCart)} */}
        <Bottom>
            <p className="coin">R$ <span className="price">{price}</span></p>
            <Actions>
              <button onClick={deleteOne}>-</button>
              <p > {/*  {...register('quantity')} */}
                {numberOfItems}
              </p>
              <button onClick={addOne}>+</button>
            </Actions>
            <Cart>
              <ShoppingCart weight="fill"/>
            </Cart>
        </Bottom>
      </form>
    </Background>
  )
}