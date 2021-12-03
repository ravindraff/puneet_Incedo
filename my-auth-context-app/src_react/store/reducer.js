
let initialState = {
    auth: {
        isLoggedIn: false
    }
}

const reducer = (state = initialState, action) => {
    console.log('In reducer ' , action)
    let newAuth = {}
    switch(action.type){
       
        case 'USER_AUTHENTICATE' :
                // state.auth.isLoggedIn = true;
                 newAuth = {...initialState.auth};
                newAuth.isLoggedIn = action.payload
                return {
                    auth : newAuth
                }
        
        default: return state; 
    }       
}

export default reducer;