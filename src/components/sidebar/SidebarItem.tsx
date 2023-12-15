import { FC } from "react"
import { SidebarRoutesTypes } from "../../types/jsonTypes"


const SidebarItem:FC<SidebarRoutesTypes[] >=( {active,icon,title}) => {

    const actived = active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${actived}`}>
                <i className={icon}></i>
                <span>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default SidebarItem
