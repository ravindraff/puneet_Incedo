import * as actions from '../actions/action'

const initialState = {
    courses: [
        // {title: 'Angular', summary: 'Framework from Google!'},
        // {title: 'React', summary: 'Libary from FB!'}
    ]
}

const reducer = (state = initialState, action)=>{
    // state modifications

    switch(action.type){
        case actions.FETCH_COURSES : return {courses: action.payload};

        case actions.ADD_COURSE: 
        // modify the courses array to add another course object
        // no mutable changes
        // state.courses.push(action.payload);
        let newCourses =  [...state.courses, action.payload]
        return {courses: newCourses}


        case actions.DELETE_COURSE: // immuatable change to courses array
        let remainingCourses = state.courses.filter((course)=> course.id != action.payload.id)
        // console.log('Remaining courses', remainingCourses);
        return {courses: remainingCourses}


        default: return state;
    }
}


export default reducer;
