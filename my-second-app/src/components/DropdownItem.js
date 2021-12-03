import React from 'react'

export default function DropdownItem(props) {


    const itemClicked = () => {
        console.log('Item clicked: ' , props.title)
        props.itemChanged(props.title);
    }

    return (
        <li><a onClick={itemClicked} className="dropdown-item" href="#">{props.title}</a></li>
    )
}
