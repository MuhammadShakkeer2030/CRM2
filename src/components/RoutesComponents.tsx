
import { Route, Routes, } from 'react-router-dom'
import {Dashboard,Customers, PageError, ProfilePage, Admin, Compaines, Users} from '../Paths'

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/superadmin' element={<Admin/>} />
            <Route path='/Companies' element={<Compaines/>} />
            <Route path='/Users' element={<Users/>} />
            <Route path='/*' element={<PageError/>} />
        </Routes>
    )
}

export default RoutesComponents
