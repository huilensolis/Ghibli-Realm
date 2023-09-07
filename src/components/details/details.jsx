import { useContext, useEffect, useState } from 'react'
import PrimaryBtn from '../buttons/primary'
import SecondaryBtn from '../buttons/secondary'
import { CartContext } from '../../context/cart'

const FilmDetails = ({ film }) => {
    const { addToCart, deleteFromCart, isFilmAlreadyInCart } =
        useContext(CartContext)

    const [primaryDisabled, setPrimaryDisabled] = useState(false)
    const [secundaryDisabled, setSecundaryDisabled] = useState(false)
    useEffect(() => {
        if (isFilmAlreadyInCart(film.id)) {
            setSecundaryDisabled(false)
            setPrimaryDisabled(true)
            return
        }
        setSecundaryDisabled(true)
        setPrimaryDisabled(false)
    }, [
        secundaryDisabled,
        primaryDisabled,
        setPrimaryDisabled,
        setSecundaryDisabled,
        film.id,
        isFilmAlreadyInCart,
    ])

    return (
        <main>
            <figure className="-z-10 absolute top-0 left-0 w-screen h-screen bg-no-repeat bg-center bg-cover opacity-60 blur-md bg-white" />
            <header className="w-full h-[calc(100vh-100px)] py-14">
                <article className="flex xl:flex-row h-full gap-3">
                    <section className="flex flex-col p-1 rounded-md">
                        <h1 className="font-bold text-9xl w-full">
                            {film.title}
                        </h1>
                        <sub className="font-bold text-7xl leading-normal">
                            {film.original_title}
                        </sub>
                    </section>
                    <section className="w-full flex flex-col justify-end gap-3">
                        <img
                            src={film.movie_banner}
                            alt={film.title}
                            className="w-full h-full object-cover overflow-hidden rounded-md object-center"
                        />
                        <p style={{ maxHeight: '600px' }}>{film.description}</p>
                        <section className="flex gap-3">
                            {!primaryDisabled && (
                                <PrimaryBtn
                                    onClick={() => addToCart(film.id)}
                                    disabled={primaryDisabled}
                                >
                                    Add to cart
                                </PrimaryBtn>
                            )}
                            {!secundaryDisabled && (
                                <SecondaryBtn
                                    onClick={() => deleteFromCart(film.id)}
                                    disabled={secundaryDisabled}
                                >
                                    Remove from cart
                                </SecondaryBtn>
                            )}
                        </section>
                    </section>
                </article>
            </header>
        </main>
    )
}

export default FilmDetails
