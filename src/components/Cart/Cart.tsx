import {FC} from 'react'
import { CartWrapper } from "./Cart.styles";
import CartItem from "./CartItem/CartItem";
import { CartItemType } from "../../App";

interface Props {
    cartItems: Array<CartItemType>;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;

}

const Cart: FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce((prevValue:number, currValue) => {
      return prevValue + currValue.amount * currValue.price
    }, 0)
  }
  return (
    <CartWrapper>
        <h2>Your Shopping Cart</h2>
        {cartItems.length ? cartItems.map(item => <CartItem key={item.id} 
        item={item} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart}/>) 
        : 
        <p>No items in cart</p>}
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </CartWrapper>
  )
}

export default Cart