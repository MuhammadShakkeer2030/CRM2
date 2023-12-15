import React, { FC } from 'react'

import './statuscard.css'

interface StatusProps {
    icon?: string;
    count: string;
    title: string;
}

const StatusCard: FC<StatusProps> = ({ icon, count, title }) => {
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <i className={icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{count}</h4>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default StatusCard
