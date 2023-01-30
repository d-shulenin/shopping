import React, {useState} from 'react'
import { useQuery } from 'react-query'

import Drawer from '@material-ui/core/Drawer'
import { LinearProgress } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@material-ui/core/Badge'

import Item from './components/Item/Item'
import Cart from './components/Cart/Cart'

import { Wrapper, StyledButton } from './App.styles'

export type CartItemType = {
  id: number;
  category: string; 
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const getProducts = async (): Promise<CartItemType[]> => {
  const data = await fetch('https://fakestoreapi.com/products')
  const products = await data.json()
  return products
}

function App() {
  const [isCartOpened, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const {data, isLoading, error} = useQuery<CartItemType[]>('fetchingData', getProducts)
  
  const getAllItems = (items: Array<CartItemType>) => items.reduce((prevValue: number, currValue) => prevValue + currValue.amount, 0)
  const addToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if (isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
        ))
      }
      return [...prev, {...clickedItem, amount: 1}]
    })
  }
  const removeFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((prevValue, currValue) => {
        if (currValue.id === id) {
          if (currValue.amount === 1) return prevValue
          return [...prevValue, {...currValue, amount: currValue.amount - 1}]
        } 
        else {
          return [...prevValue, currValue]
        }
      }, [] as CartItemType[])
    ))
  }

  if (isLoading) return <LinearProgress />
  if (error) return <p>Error</p>
  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpened} onClose={() => setCart(false)}>
        <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
      </Drawer>
      <StyledButton onClick={() => setCart(true)}>
        <Badge badgeContent={getAllItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCart={addToCart}/>
          </Grid>
          ))}
      </Grid>
    </Wrapper>
  )
}

export default App