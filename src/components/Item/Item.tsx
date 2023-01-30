import React from 'react'
import Button from '@material-ui/core/Button'
import { CartItemType } from '../../App'
import { ItemWrapper } from './Item.styles'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, addToCart}) => (
    <ItemWrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>${item.price}</h4>
        </div>
        <Button onClick={()=>addToCart(item)}>Add to cart</Button>
    </ItemWrapper>
)

export default Item