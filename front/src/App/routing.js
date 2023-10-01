import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/layout'
import Discord from '../containers/discord/'
import Index from '../Layout/index'
import Login from '../containers/login'
import YouTube from '../containers/youtube/youtube.js'
import ErrorPage from '../Layout/error.page'

const routing = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <Index />,
                index: true
            },
            {
                element: <Discord />,
                path: '/discord'
            },
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <YouTube />,
                path: '/yousearch'
            }
        ]
    }
])

export default routing