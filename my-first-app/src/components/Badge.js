// function returning a jsx/html 

function Badge(props){
    return (
        <button type="button" className="btn btn-primary">
        {props.caption} <span className="badge bg-secondary">4</span>
      </button>
    )
}

// export function
export default Badge;