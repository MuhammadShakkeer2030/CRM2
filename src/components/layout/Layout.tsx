import { useEffect } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import RoutesComponents from '../RoutesComponents'

import { BrowserRouter,  } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'
import { RootState } from '../../redux/reducers'

const Layout = () => {

    const themeReducer = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode')

        const colorClass = localStorage.getItem('colorMode')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
console.log(themeReducer)
    return (
        <BrowserRouter>
            <div className={`layout ${themeReducer?.mode} ${themeReducer?.color}`} >
                <Sidebar />
                <div className="layout__content">
                    <TopNav />
                    <div className="layout__content-main">

                            <RoutesComponents />

                        
                    </div>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default Layout
