import { createContext, useEffect, useState } from 'react'

const CartContext = createContext('')

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        setCartCount(cart.length)
    }, [cart, setCart])

    const addToCart = (filmId) => {
        if (cart.includes(filmId)) {
            return
        }
        setCart([...cart, filmId])
    }
    const deleteFromCart = (id) => {
        setCart(cart.filter((filmId) => filmId !== id))
        console.log(id)
        console.log(cart.filter((film) => film.id !== id))
    }
    const isFilmAlreadyInCart = (filmId) => {
        return cart.includes(filmId)
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                cartCount,
                addToCart,
                deleteFromCart,
                isFilmAlreadyInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }
