import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cart'

import PrimaryBtn from '../../components/buttons/primary'
import Tiket from '../../components/tiket'
const apiUrl = 'https://ghibliapi.vercel.app'

const MyTikets = () => {
    const { cart } = useContext(CartContext)

    const [tikets, setTikets] = useState([])
    useEffect(() => {
        async function getFilm() {
            const copyOfTikets = [...tikets]
            const filmsToAdd = []
            const filmsToRemove = []

            for (const filmId of cart) {
                // if the tikets array has'nt the fil, we push it into the filmsToAdd array
                if (!copyOfTikets.some((film) => film.id === filmId)) {
                    const response = await fetch(`${apiUrl}/films/${filmId}`)
                    const responseFilm = await response.json()
                    filmsToAdd.push(responseFilm)
                }
            }

            // we check if the fimls in the tikets are in the filmsToRemove array, and if, we add them to the filmsToRemove
            for (const film of copyOfTikets) {
                if (!cart.includes(film.id)) {
                    filmsToRemove.push(film.id)
                }
            }

            // we remove the files that are int he filmsToRemove array that are in the tikets array
            const filteredTikets = copyOfTikets.filter(
                (film) => !filmsToRemove.includes(film.id)
            )

            // we set the new array: the filteredTikets and the tikets to remove
            setTikets([...filteredTikets, ...filmsToAdd])
        }
        getFilm()
    }, [cart])
    return (
        <main className="flex flex-col justify-between items-centerw-full w-full h-full">
            {tikets.length > 0 ? (
                <section className="flex flex-col gap-5 hfull w-full">
                    <ul className="h-full w-full flex flex-col gap-9">
                        {tikets.map((film) => {
                            return (
                                <li key={film.id} className="w-full">
                                    <Tiket film={film} />
                                </li>
                            )
                        })}
                    </ul>
                    <PrimaryBtn>CheckOut</PrimaryBtn>
                </section>
            ) : (
                <p className="text-center">
                    There are no tikets here yet, try adding some films to the
                    cart!
                </p>
            )}
        </main>
    )
}

export default MyTikets
