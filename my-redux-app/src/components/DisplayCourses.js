import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'

const courseState = (state) => {
    return {
        courses: state.courses
    }
}

function DisplayCourses(props) {

    const state = useSelector(courseState)
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        console.log('handle delete  in parent', index)

        // var newCourses = [...courses]
        // // newCourses.splice(index, 1);
        // let courseDeleted = newCourses.splice(index, 1);
        // console.log(newCourses);
        // setCourses(newCourses);
    }

    let tableRows = state.courses.map((course, i) => {
        return (
            <tr>
                <th scope="row">1</th>
                <td>{course.title}</td>
                <td>{course.summary}</td>
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


// const mapStateToProps = (state) => {
//     console.log(state);

//     return {
//         courses: state.courses
//     }
// }

// export default connect(mapStateToProps)(DisplayCourses);

export default DisplayCourses;