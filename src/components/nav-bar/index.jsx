import NavItem from '../nav-link'
const NavBar = ({ leftNavLinks, rightNavLinks }) => {
    return (
        <nav className="w-full flex justify-between items-center py-7 px-7">
            <ul className="flex list-none gap-5">
                {leftNavLinks.map((item) => (
                    <li key={item.link}>
                        <NavItem link={item.link}>{item.text}</NavItem>
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
