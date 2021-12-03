

const initialState = {
    users: [
        {name: 'Ravi', email: 'ravi@test.com'},
        {name: 'Kunal', email: 'kunal@test.com'}
    ]
}

const reducer = (state = initialState, action)=>{
    // state modifications

    switch(action.type){
        default: return state;
    }
}


export default reducer;
