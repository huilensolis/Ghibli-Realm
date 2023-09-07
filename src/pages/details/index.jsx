import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FilmDetails from '../../components/details/details'

const apiUrl = 'https://ghibliapi.vercel.app'

const Details = () => {
    // we get the film id from the current url
    const location = useLocation()
    const filmId = location.state

    const [film, setFilm] = useState({})

    useEffect(() => {
        async function getFilm() {
            const response = await fetch(`${apiUrl}/films/${filmId}`)
            const data = await response.json()
            setFilm(data)
        }
        getFilm()
    }, [filmId])

    useEffect(() => {
        if (film.original_title_romanised) {
            document.title = film.original_title_romanised
        }
    }, [film])

    return <FilmDetails film={film} />
}
export default Details
