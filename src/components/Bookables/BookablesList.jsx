import React from 'react'
import {bookables} from '../../static.json';


export default function BookablesList() {
    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const bookablesIndex=1;

    return (
        <ul className="bookables items-list-nav">
            {bookablesInGroup.map((b,i) =>(
                <li 
                    key={i}
                    className={i === bookablesIndex ? "selected": null}
                >
                   <button className="btn"> {b.title}</button>
                </li>
            ))}
        </ul >
    )
}
