const redux = require('redux');
console.log('Redux concepts');

 
// 1. Create reducer - to modify a section of state (immutable way)

const initialState = {
    courses: [
        {title: 'Angular', summary: 'Framework from Google!'},
        {title: 'React', summary: 'Libary from FB!'},
    ]
}

const reducer = (state = initialState, action)=>{
    // state modifications

    switch(action.type){
        //case 'FETCH_COURSES' : return state;

        case 'ADD_COURSE': 
        // modify the courses array to add another course object
        // no mutable changes
        // state.courses.push(action.payload);

        let newCourses =  [...state.courses, action.payload]
        return {courses: newCourses}


        case 'DELETE_COURSE': // immuatable change to courses array
        let remainingCourses = state.courses.filter((course)=> course.title != action.payload.title)
        // console.log('Remaining courses', remainingCourses);
        return {courses: remainingCourses}


        default: return state;
    }
}


// 2. Create single store --- all the state within it
const store = redux.createStore(reducer);


// on change of store .. print the new state
store.subscribe(() => console.log(store.getState()))

// 3. Create and dispatch actions
store.dispatch({type: 'ADD_COURSE', payload: {title: 'JS', summary: 'Basic programming lang!'} })


const action = {type:'DELETE_COURSE', payload: {title: 'Angular'}};
store.dispatch(action)


const action2 = {type:'FETCH_COURSES'};
store.dispatch(action2)