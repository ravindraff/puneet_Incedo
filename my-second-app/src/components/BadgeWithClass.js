// class component

import React, { Component } from 'react'

export default class BadgeWithClass extends Component {

    constructor(){
        // invoke super class constructor
        super();
        // belongs to the component
        this.state = {count: 0}
    }

    incrementCount(){
        // Wrong way of chaning state
        // this.state.count = this.state.count + 1;
        // Wrong because props are immutable/ read-only
        // this.props.caption = "Some value";


        // Right way
        console.log('Click event... ')
        
        let newCount = this.state.count + 1;
        this.setState({count: newCount})
    }

    render() {
        return (
            <button type="button" onClick={this.incrementCount.bind(this)} className="btn btn-primary">
                {this.props.caption} <span className="badge bg-secondary">{this.state.count}</span>
            </button>
        )
    }
}




// functional component

// import React from 'react'

// export default function BadgeWithClass() {
//     return (
//         <div>
            
//         </div>
//     )
// }

