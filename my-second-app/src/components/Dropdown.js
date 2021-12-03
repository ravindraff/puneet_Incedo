import React, { useState } from 'react'
import DropdownItem from './DropdownItem';

export default function Dropdown() {

    const [show, setShow] = useState(false);
    const [cuisines, setCuisines] = useState([
      'Indian', 'Continental', 'Mexican', 'Japanese'
    ]);
    const [caption, setCaption] = useState('')
    

    const toggleShow = () => {
        setShow(!show);
    }

    const handleItemChange = (item) => {
        console.log('Item changed in parent component... ', item)
        setCaption(item);
        setShow(false);
    }

    // create list item from array of cuisines
    let cuisineList = cuisines.map((cuisine, i)=> {
        // return  <li><a className="dropdown-item" href="#">{cuisine}</a></li>
        return <DropdownItem key={i} title={cuisine} itemChanged={handleItemChange}></DropdownItem>
    })
    console.log(cuisineList);

    return (
        <div className="dropdown">
        <button onClick={toggleShow} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {caption || 'Select cuisine'}
        </button>
        <ul className={show?'dropdown-menu show':'dropdown-menu'} aria-labelledby="dropdownMenuButton1">
            {cuisineList}
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
        </div>
    )
}
