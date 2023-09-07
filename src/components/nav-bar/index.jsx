import {
    ShoppingCartIcon,
    Bars3BottomLeftIcon,
    Bars3BottomRightIcon,
} from '@heroicons/react/24/solid'

import { NavLink } from 'react-router-dom'
import NavItem from '../nav-link'

import CartCount from '../cart-count'
import { useState } from 'react'
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

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <nav className="w-full flex justify-between items-center py-7 px-10vw fixed top-0 z-10 bg-cm-white">
            <ul className="flex list-none gap-5 min-w-max">
                {leftNavLinks.map((item) => (
                    <li key={item.link}>
                        {item.logo && (
                            <NavLink to={item.link} className="font-bold">
                                {item.text}
                            </NavLink>
                        )}
                        {!item.logo && (
                            <NavItem link={item.link}>{item.text}</NavItem>
                        )}
                    </li>
                ))}
            </ul>
            <ul className="flex list-none gap-5 min-w-max">
                {rightNavLinks.map((item) => (
                    <li key={item.link} className="hidden md:flex">
                        <NavItem link={item.link}>{item.text}</NavItem>
                    </li>
                ))}
                <li className="hidden md:flex justify-center items-center gap-1">
                    <ShoppingCartIcon className="h-5 w-5" /> <CartCount />
                </li>
                <li className="md:hidden flex">
                    {showMobileMenu ? (
                        <Bars3BottomRightIcon
                            className="h-10 w-10"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                        />
                    ) : (
                        <Bars3BottomLeftIcon
                            className="h-10 w-10"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                        />
                    )}
                </li>
            </ul>

            {/* mobile menu */}
            <ul
                className={
                    showMobileMenu
                        ? 'flex flex-col justify-center items-center absolute top-24 left-0 z-10 h-screen w-full pb-24 bg-cm-white gap-2'
                        : 'hidden'
                }
            >
                {rightNavLinks.map((item) => (
                    <li
                        key={item.link}
                        className="md:hidden flex"
                        onClick={() => setShowMobileMenu(false)}
                    >
                        <NavItem link={item.link} isMobileMenu={true}>
                            {item.text}
                        </NavItem>
                    </li>
                ))}
                {leftNavLinks
                    .filter((item) => !item.logo)
                    .map((item) => (
                        <li
                            key={item.link}
                            className="md:hidden flex"
                            onClick={() => setShowMobileMenu(false)}
                        >
                            <NavItem link={item.link} isMobileMenu={true}>
                                {item.text}
                            </NavItem>
                        </li>
                    ))}
                <li className="md:hidden flex gap-1">
                    <ShoppingCartIcon className="h-11 w-11" />
                    <CartCount classes={'text-5xl'} />
                </li>
            </ul>
        </nav>
    )
}
export default NavBar
