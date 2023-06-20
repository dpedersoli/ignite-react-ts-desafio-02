// import { useFormContext } from "react-hook-form";
import { useState } from 'react';

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react'
import { Actions, CheckoutContent, LeftDownSection, LeftSection, LeftUpSection } from './styles';

export function Checkout() {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const extensaoDeCepsBRUsarApi = ['MG', 'SP', 'RS', 'RJ']
  // const { register } = useFormContext()

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


  return(
    <CheckoutContent>
      <LeftSection>
        <h4>Complete seu pedido</h4>
        <LeftUpSection>
          <div className="header">
            <MapPinLine size={22} color="#C47F17" />
            <h5>Endereço de Entrega</h5>
          </div>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          <div className="form">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />

            <input type="text"
              id="state"
              list="state-suggestions"
              placeholder="Estado"
              
            />
            {/* {...register('state')} */}

            <datalist id="state-suggestions">
              {extensaoDeCepsBRUsarApi.map((cep) => {
                return (
                  <option value={cep}></option>
                )
              })}
            </datalist>
          </div>
        </LeftUpSection>

        <LeftDownSection>
          <div className="flex-row">
            <CurrencyDollar size={22} color="#20223c" />
            <h5>Pagamento</h5>
          </div>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

          <div>
            <button>
              <CreditCard size={22} color="#20223c" />
              Cartão de Crédito
            </button>
            <button>
              <Bank size={22} color="#20223c" />
              Cartão de Débito
            </button>
            <button>
              <Money size={22} color="#20223c" />
              Dinheiro
            </button>
          </div>
        </LeftDownSection>

      </LeftSection>

      <div>
        <h4>Cafés selecionados</h4>

        <div className="flex-row">
          <img src="" alt="" />

          <div className="flex-col">
            <div className="flex-row">
              <p>Expresso Tradicional</p>
              <p>R$ 9,90</p>
            </div>

            <div className="flex-row">
              <Actions>
                <button onClick={deleteOne}>-</button>
                <p > {/*  {...register('quantity')} */}
                  {numberOfItems}
                </p>
                <button onClick={addOne}>+</button>
              </Actions>
              <button>
                <Trash size={22} color="#20223c" />
                Remover
              </button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>

          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>

          <div>
            <p>Total</p>
            <p>R$ 33,20</p>
          </div>
        </div>
      </div>
    </CheckoutContent>
  )
}