import { useEffect } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import RoutesComponents from '../RoutesComponents'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'
import { RootState } from '../../redux/reducers'

const Layout = () => {

    const themeReducer = useSelector((state: RootState) => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={
                    <div className={`layout ${themeReducer?.mode} ${themeReducer?.color}`}>
                        <Sidebar />
                        <div className="layout__content">
                            <TopNav />
                            <div className="layout__content-main">

                                <RoutesComponents />
                            </div>
                        </div>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout
