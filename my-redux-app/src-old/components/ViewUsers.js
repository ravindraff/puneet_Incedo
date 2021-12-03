import React from 'react'
import { connect } from 'react-redux'

function ViewUsers(props) {

    let userList = props.users.map((user, i)=> {
        return <li>{user.email}</li>
    })
    return (
        <div>
            <h2>View Users</h2>
            <ul>
                {userList}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        users: state.userReducer.users
    }
}


export default connect(mapStateToProps)(ViewUsers)
