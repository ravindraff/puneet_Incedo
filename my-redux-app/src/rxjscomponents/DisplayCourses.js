import React, { useState ,useEffect} from 'react'
import { courseService } from '../services/CourseService'

function DisplayCourses(props) {

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
    let tableRows = courses.map((course, i) => {
        return (
            <tr>
                <th scope="row">1</th>
                <td>{course.title}</td>
                <td>{course.price}</td>
                <td>@mdo</td>
            </tr>
        )
    })


    return (
        <div className="container ">

            <div className="row">
                <h2>Display Courses</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Summary</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>

        </div>
    )
}




export default DisplayCourses;