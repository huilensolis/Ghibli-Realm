import { NavLink } from 'react-router-dom'

const NavItem = ({ link, children }) => {
    const activeClassName = 'underline font-bold'
    const pendingClassName = 'text-gray-500'
    return (
        <NavLink
            to={link}
            className={({ isActive, isPending }) =>
                isActive ? activeClassName : isPending ? pendingClassName : ''
            }
        >
            {children}
        </NavLink>
    )
}

export default NavItem
