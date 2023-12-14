
import { Route, Routes, } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path='/' Component={Dashboard} />
            <Route path='/customers' Component={Customers} />
        </Routes>
    )
}

export default RoutesComponents
