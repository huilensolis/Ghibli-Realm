import { useContext } from 'react'
import { CartContext } from '../../context/cart'

const CartCount = () => {
    const { cartCount } = useContext(CartContext)
    return <span>{cartCount}</span>
}
export default CartCount
