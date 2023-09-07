import { useContext } from 'react'
import { CartContext } from '../../context/cart'

const CartCount = ({ classes }) => {
    const { cartCount } = useContext(CartContext)
    return <span className={classes}>{cartCount}</span>
}
export default CartCount
