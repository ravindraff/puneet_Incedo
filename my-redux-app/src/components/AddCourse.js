import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { saveCourse } from '../store/reducer'



function AddCourse(props) {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')

    const handleTitleChange = ($event) => {
        // console.log($event.target.value)
        // if($event.target.value.length< 6){

        // }
        setTitle($event.target.value)

    }
    const handleSummaryChange = ($event) => {
        // console.log($event.target.value)
        setSummary($event.target.value)
    }


    const addCourse = ()=>{

        let course = {title, summary};
        console.log(course);
        // props.onCourseAdd(course);
        dispatch(saveCourse(course));
        // add the course to the store

        // fetch call to make HTTP POST
        // fetch('http://localhost:8000/courses/', {
        //     method: "POST",
        //     body: JSON.stringify(course),
        //     headers: {"Content-type": "application/json; charset=UTF-8"}
        //   })
        //   .then(response => response.json()) 
        //   .then(json => console.log(json))
        //   .catch(err => console.log(err));


    }
    return (
        <>
             <h2>Add Course</h2>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Title</span>
                <input type="text" class="form-control" onChange={handleTitleChange} value={title} placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Summary</span>
                <input type="text" class="form-control"  onChange={handleSummaryChange} value={summary} placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                <button onClick={addCourse} className="btn btn-primary">Add Course</button>
                </div>
        </>
    )
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onCourseAdd: (course) => dispatch(actions.addCourse(course))
//     }
// }



// export default connect(null, mapDispatchToProps)(AddCourse) ;


export default AddCourse;
