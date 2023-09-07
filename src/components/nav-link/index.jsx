import { NavLink } from 'react-router-dom'

const NavItem = ({ link, children, isMobileMenu = false }) => {
    const defaultStyles = `flex gap-1 justify-center items-center ${
        isMobileMenu ? 'text-5xl' : ''
    }`
    const activeClassName = `${defaultStyles} underline font-bold`
    const pendingClassName = `${defaultStyles} text-gray-500`
    return (
        <NavLink
            to={link}
            className={({ isActive, isPending }) =>
                isActive
                    ? activeClassName
                    : isPending
                    ? pendingClassName
                    : defaultStyles
            }
        >
            {children}
        </NavLink>
    )
}

export default NavItem
