import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../home'
import MyTikets from '../my-tikets'
import NotFound from '../not-found'
import NavBar from '../../components/nav-bar'
import Details from '../details'

import { CartContextProvider } from '../../context/cart'

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/my-tikets',
            element: <MyTikets />,
        },
        {
            path: '/details/:id',
            element: <Details />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ])
    return routes
}

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <AppRoutes />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
