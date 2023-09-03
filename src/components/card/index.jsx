import { NavLink } from 'react-router-dom'

const Card = ({ id, title, image }) => {
    return (
        <NavLink to={`/details/${id}`} state={id}>
            <article className="h-full w-full flex flex-col gap-1">
                <img src={image} alt={title} className="w-full h-full" />
                <title>{title}</title>
            </article>
        </NavLink>
    )
}

export default Card
