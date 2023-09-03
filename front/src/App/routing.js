import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/layout'
import Discord from '../containers/discord'
import Index from '../Layout/index'
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
            }
        ]
    }
])

export default routing