import { useState } from "react";


function Badge(props){

    const [count, setCount] = useState(0);

    const incrementCount = ()=>{
        console.log('click event');
        let newCount = count + 1;
        setCount(newCount);
    }

    return (
        <button type="button" onClick={incrementCount} className="btn btn-primary">
            {props.caption} <span className="badge bg-secondary">{count}</span>
        </button>
    )
}

export default Badge;