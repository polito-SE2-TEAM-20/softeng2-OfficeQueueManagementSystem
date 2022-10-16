import './style/style.css';
import React, { useState, useEffect } from 'react';
import { getSuffix, getDayOfTheWeek, getMonthName, extendMinutes } from './GenericFunctions';
import Col from 'react-bootstrap/esm/Col';

const TimeAndDate = (props) => {
    const [dateState, setDateState] = useState(new Date());

    /**
     * Updating of the clock; it happens periodically.
     */
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 10000);
    }, []);

    let dd = dateState.getDate();
    let day = getDayOfTheWeek(dateState.getDay());
    let mm = getMonthName(dateState.getMonth());
    let yy = dateState.getFullYear();
    let hour = dateState.getHours();
    let minutes = extendMinutes(dateState.getMinutes());
    let suffix = getSuffix(dateState.getDate());


    return (
        <div class="footer">
            <div class="mainScreenTimeAndDate">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="45" height="45" fill="currentColor" class="bi bi-clock" viewBox="0 0 20 20"
                    style={{ paddingRight: "5px" }}>
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                {hour}:{minutes} - {day}, {dd}{suffix} {mm} {yy}
            </div>
        </div>
    );
}

export default TimeAndDate;