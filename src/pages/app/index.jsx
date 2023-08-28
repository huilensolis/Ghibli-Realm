import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../home'
import Account from '../account'
import Chekcout from '../checkout'
import MyTikets from '../my-tikets'
import SignIn from '../sign-in'
import NotFound from '../not-found'

import NavBar from '../../components/nav-bar'

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/account',
            element: <Account />,
        },
        {
            path: '/checkout',
            element: <Chekcout />,
        },
        {
            path: '/my-tikets',
            element: <MyTikets />,
        },
        {
            path: '/sign-in',
            element: <SignIn />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ])
    return routes
}

const App = () => {
    const leftNavItems = [
        {
            text: 'home',
            link: '/',
        },
        {
            text: 'fantasy',
            link: '/fantasy',
        },
        {
            text: 'drama',
            link: '/drama'
        },
        {
            text: 'mistery',
            link: '/mistery'
        }
    ]
    const rightNavItems = [
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
        <BrowserRouter>
            <NavBar leftNavLinks={leftNavItems} rightNavLinks={rightNavItems} />
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App
