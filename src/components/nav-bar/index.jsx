import { NavLink } from 'react-router-dom'
import NavItem from '../nav-link'
const NavBar = () => {
    const leftNavLinks = [
        {
            text: 'Ghibli Realm',
            link: '/',
            logo: true,
        },
    ]
    const rightNavLinks = [
        {
            text: 'my tikets',
            link: '/my-tikets',
        },
        {
            text: 'my account',
            link: '/account',
        },
        {
            text: 'sign In',
            link: '/sign-in',
        },
    ]
    return (
        <nav className="w-full flex justify-between items-center py-7 px-28 fixed top-0 z-10 bg-cm-white">
            <ul className="flex list-none gap-5">
                {leftNavLinks.map((item) => (
                    <li key={item.link}>
                        {item.logo && <NavLink to={item.link} className='font-bold'>{item.text}</NavLink>}
                        {!item.logo && (
                            <NavItem link={item.link}>{item.text}</NavItem>
                        )}
                    </li>
                ))}
            </ul>
            <ul>
                <ul className="flex list-none gap-5">
                    {rightNavLinks.map((item) => (
                        <li key={item.link}>
                            <NavItem link={item.link}>{item.text}</NavItem>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
    )
}
export default NavBar
