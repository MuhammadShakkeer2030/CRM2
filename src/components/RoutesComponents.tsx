
import { Route, Routes, } from 'react-router-dom'
import {Dashboard,Customers, PageError} from '../Paths'

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/*' element={<PageError/>} />
        </Routes>
    )
}

export default RoutesComponents
