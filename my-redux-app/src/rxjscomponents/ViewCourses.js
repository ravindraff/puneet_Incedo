import React, {useEffect, useState} from 'react'
import { courseService } from '../services/CourseService'
import Card from './Card'

function ViewCourses(props) {

    const [courses, setCourses] = useState([
    ])

    useEffect(() => {
        courseService.getCourses()
        .subscribe(courses => {
            setCourses(courses)
        })
       
    }, [])


    const handleDelete = (id)=>{
        console.log('handle delete  in parent', id)
        // dispatch(deleteCourse(id))

    }

    let listCourses = courses.map((course, i)=>{
        return <Card key={course.id} idx={course.id} title={course.title} summary={course.summary} courseDeleted={handleDelete}></Card>
    })


    return (
        <div className="container ">
     <div className="row">
         <button onClick={()=>courseService.fetchCourses()}>Load Courses</button>
     </div>
            <div className="row">
            <h2>View Courses</h2>
                {listCourses}
            </div>
           
        </div>
    )
}



export default ViewCourses;
