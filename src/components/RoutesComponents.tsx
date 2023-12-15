
import { Route, Routes, } from 'react-router-dom'
import {Dashboard,Customers, PageError, ProfilePage} from '../Paths'

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/*' element={<PageError/>} />
            <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
    )
}

export default RoutesComponents
