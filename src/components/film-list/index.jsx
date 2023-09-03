import Card from '../card'

const FilmList = ({ filmList }) => {
    return (
        <section>
            <ul className="flex flex-wrap w-full h-full justify-center align-middle gap-9">
                {filmList.map((film) => (
                    <li key={film.id} className="w-52">
                        <Card
                            id={film.id}
                            image={film.image}
                            title={film.original_title_romanised}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default FilmList
