import { useState, useEffect } from 'react'

import FilmList from '../../components/film-list'

const apiUrl = 'https://ghibliapi.vercel.app'
const Home = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        async function getFilms() {
            const response = await fetch(`${apiUrl}/films`)
            const data = await response.json()
            return setFilms(data)
        }
        getFilms()
    }, [])
    return (
        <>
            <FilmList filmList={films} />
        </>
    )
}

export default Home
