import React, {useEffect, useState} from 'react'
import AddCourse from './AddCourse'
import Card from './Card'
import {
    useParams
  } from "react-router-dom";

export default function ViewCourses() {

    let { id } = useParams();

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')

    const [courses, setCourses] = useState([
        // {id: 23, title:'Angular', summary:'Angular is from google.. its a framework'},
        // {id: 13, title:'React', summary:'React is from facebook.. its a library'},
        // {id: 3, title:'Ember', summary:'Ember is open-source.. its a framework'}
    ])


    useEffect(() => {
        console.log('only called up once .. replacement for CDM')
         fetch('http://localhost:8000/courses/')
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            setCourses(data);
        })
        .catch(err=>console.log(err))
    }, [])

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


    const addCourse = (index)=>{
        

        var newCourses = [ ...courses ]
        newCourses.push({title, summary})
        console.log(newCourses);
        setCourses(newCourses);
        setTitle('') 
        setSummary('')
    }
    const handleDelete = (index)=>{
        console.log('handle delete  in parent', index)

        var newCourses = [ ...courses ]
        // newCourses.splice(index, 1);
        let courseDeleted = newCourses.splice(index, 1);
        fetch('http://localhost:8000/courses/' + courseDeleted[0].id, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            // this.setState({courses: data});
        })
        .catch(err=>console.log(err))

        console.log(newCourses);
        setCourses(newCourses);
    }

    let listCourses = courses.map((course, i)=>{
        return <Card key={course.id} idx={i} title={course.title} summary={course.summary} courseDeleted={handleDelete}></Card>
    })


    return (
        <div className="container ">
            <div className="row">
                <h2>Added a new course with id: {id}</h2>
            </div>
            <div className="row">

                
                {/* <h2>Add Course</h2>
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
                </div> */}
            </div>
            <div className="row">
            <h2>View Courses</h2>
                {listCourses}
            </div>
           
        </div>
    )
}
