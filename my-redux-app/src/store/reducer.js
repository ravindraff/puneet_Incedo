

import {createSlice} from '@reduxjs/toolkit'
const baseURL = 'http://localhost:8000/courses/'

const courseReducer = createSlice({
    name: "Courses",
    initialState : {
        courses: []
    },
    reducers: {
        FETCH_COURSES(state, action){
            return {courses: action.payload};
        },
        ADD_COURSE(state, action){
            let newCourses =  [...state.courses, action.payload]
            return {courses: newCourses}
        },
        DELETE_COURSE(state, action){
            let remainingCourses = state.courses.filter((course)=> course.id != action.payload.id)
            // console.log('Remaining courses', remainingCourses);
            return {courses: remainingCourses}
        }
    }
})
export const {FETCH_COURSES, ADD_COURSE, DELETE_COURSE} = courseReducer.actions;
export default courseReducer.reducer;

export const fetchCourses = () => {
    return (dispatch) => {
        fetch(baseURL)
          .then(response => response.json()) 
          .then(json => {
              console.log(json);
              dispatch(FETCH_COURSES(json));
          })
          .catch(err => console.log(err));

    }
}

export const saveCourse = (course) => {

    // delayed dispatch available through thunk
    return  (dispatch) => {
        fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(course),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json()) 
          .then(json => {
              console.log(json);
              dispatch(ADD_COURSE(json));
          })
          .catch(err => console.log(err));

    }

    // return {type: ADD_COURSE, payload: course};
}
export const deleteCourse = (id) => {

    return (dispatch) => {
        fetch(baseURL + id, {
        method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            // this.setState({courses: data});
            dispatch(DELETE_COURSE({id}));
        })
        .catch(err=>console.log(err))
    }


    
}





// const initialState = {
//     courses: [
//         // {title: 'Angular', summary: 'Framework from Google!'},
//         // {title: 'React', summary: 'Libary from FB!'}
//     ]
// }

// const reducer = (state = initialState, action)=>{
//     // state modifications

//     switch(action.type){
//         case actions.FETCH_COURSES : return {courses: action.payload};

//         case actions.ADD_COURSE: 
//         // modify the courses array to add another course object
//         // no mutable changes
//         // state.courses.push(action.payload);
//         let newCourses =  [...state.courses, action.payload]
//         return {courses: newCourses}


//         case actions.DELETE_COURSE: // immuatable change to courses array
//         let remainingCourses = state.courses.filter((course)=> course.id != action.payload.id)
//         // console.log('Remaining courses', remainingCourses);
//         return {courses: remainingCourses}


//         default: return state;
//     }
// }



