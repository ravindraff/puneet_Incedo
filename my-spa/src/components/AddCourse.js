import React, {useState} from 'react'
import {
    useHistory
  } from "react-router-dom";
export default function AddCourse() {

    

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')

    let history = useHistory();

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
        // fetch call to make HTTP POST
        fetch('http://localhost:8000/courses/', {
            method: "POST",
            body: JSON.stringify(course),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json()) 
          .then(json => {
              console.log(json)
            //   if(condition1)
              // navigate to view coureses path
              history.push('/viewcourse/'+ json.id) 
              // else if(condition 2)
              // alert message
          })

          .catch(err => console.log(err));


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
