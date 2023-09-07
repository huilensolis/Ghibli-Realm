import { useContext, useEffect, useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
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
        <main className="w-full min-h[calc(100vh-100px)] h-full py-14">
            <article className="flex xl:flex-row flex-col h-full gap-3">
                <section className="flex flex-col p-1 rounded-md">
                    <h1 className="font-bold xl:text-8xl text-7xl xl:break-normal w-full break-all">
                        {film.title}
                    </h1>
                    <sub className="font-bold xl:text-7xl text-5xl leading-normal">
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
                                <PlusCircleIcon className="h-5 w-5" />
                            </PrimaryBtn>
                        )}
                        {!secundaryDisabled && (
                            <SecondaryBtn
                                onClick={() => deleteFromCart(film.id)}
                                disabled={secundaryDisabled}
                            >
                                Remove from cart{' '}
                                <MinusCircleIcon className="h-5 w-5" />
                            </SecondaryBtn>
                        )}
                    </section>
                </section>
            </article>
        </main>
    )
}

export default FilmDetails
