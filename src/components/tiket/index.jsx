import { useContext } from 'react'
import { MinusCircleIcon } from '@heroicons/react/24/solid'

import PrimaryBtn from '../buttons/primary'
import { CartContext } from '../../context/cart'

const Tiket = ({ film }) => {
    const { deleteFromCart } = useContext(CartContext)
    return (
        <article
            key={film.id}
            className="flex xl:flex-row flex-col justify-between items-center w-full bg-cm-tomato rounded-lg overflow-hidden xl:pr-5 xl:pb-0 xl:gap-0 pb-5 gap-5"
        >
            <img
                src={film.image}
                alt={film.title}
                className="xl:w-28 w-full max-h-[168px] xl:h-full object-cover object-center"
            />
            <section className="text-center px-5 xl:px-0">
                <h2 className="text-5xl font-bold">{film.title}</h2>
                <sub className="text-4xl font-bold">{film.original_title}</sub>
            </section>
            <PrimaryBtn
                onClick={() => deleteFromCart(film.id)}
                disabled={false}
            >
                Remove from cart
                <MinusCircleIcon className="h-5 w-5" />
            </PrimaryBtn>
        </article>
    )
}
export default Tiket
