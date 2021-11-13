import React, {useState} from 'react'
import {bookables} from '../../static.json';
import { FaArrowRight } from 'react-icons/fa';

export default function BookablesList() {
    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const [bookableIndex, setBookableIndex] = useState(1)
    const [selected, setSelected] = useState('Lecture Hall');

    // const changeBookable = (selectedIndex) =>{
    //     bookablesIndex = selectedIndex;
    //     console.log(bookablesIndex)
    // }
    const nextBookable =() =>{
        setBookableIndex((i=>(i+1) % bookablesInGroup.length))
    }

    return (
        <div>
        <ul className="bookables items-list-nav">
            {bookablesInGroup.map((b,i) =>(
                <li 
                    key={i}
                    className={i === bookableIndex ? "selected": null}
                >
                   <button className="btn" onClick={()=>setBookableIndex(i)}> {b.title}</button>
                </li>
            ))}
        </ul>
        <p>
            <button className="btn" onClick={nextBookable} autoFocus>
                <FaArrowRight />
                <span>Next</span>
            </button>
        </p>
        </div>
    )
}
