import { useState, useEffect } from 'react'

import FilmList from '../../components/film-list'

const apiUrl = 'https://ghibliapi.vercel.app'
const Home = () => {
    const [films, setFilms] = useState()
    useEffect(() => {
        async function getFilms() {
            const response = await fetch(`${apiUrl}/films`)
            const data = await response.json()
            const dataMapped = data.map((film) => ({
                id: film.id,
                description: film.escription,
                director: film.director,
                image: film.image,
                movie_banner: film.movie_banner,
                original_title: film.original_title,
                original_title_romanised: film.original_title_romanised,
                title: film.title,
                url: film.url,
            }))
            return setFilms(dataMapped)
        }
        function setDocumentTitle(){
            document.title = 'Ghibli Realm'
        }
        getFilms()
        setDocumentTitle()
    }, [])
    return <>{films && <FilmList filmList={films} />}</>
}

export default Home
