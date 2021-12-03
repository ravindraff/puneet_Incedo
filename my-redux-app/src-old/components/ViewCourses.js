import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import * as actions from '../actions/action'

function ViewCourses(props) {


    // const [courses, setCourses] = useState([
    //     {id: 23, title:'Angular', summary:'Angular is from google.. its a framework'},
    //     {id: 13, title:'React', summary:'React is from facebook.. its a library'},
    //     {id: 3, title:'Ember', summary:'Ember is open-source.. its a framework'}
    // ])


    useEffect(() => {
        props.onFetchCourses()
       
    }, [])


    const handleDelete = (id)=>{
        console.log('handle delete  in parent', id)
        props.onCourseDeletion(id)
        // var newCourses = [ ...courses ]
        // // newCourses.splice(index, 1);
        // let courseDeleted = newCourses.splice(index, 1);
        // console.log(newCourses);
        // setCourses(newCourses);
    }

    let listCourses = props.courses.map((course, i)=>{
        return <Card key={course.id} idx={course.id} title={course.title} summary={course.summary} courseDeleted={handleDelete}></Card>
    })


    return (
        <div className="container ">
     
            <div className="row">
            <h2>View Courses</h2>
                {listCourses}
            </div>
           
        </div>
    )
}


// const mapDispatchToProps = (dispatch) => {
//     // console.log(state);
// }

const mapDispatchToProps = (dispatch) => {
    return {
        onCourseDeletion: (id) => dispatch(actions.deleteCourse(id)),
        onFetchCourses: () => dispatch(actions.fetchCourses())
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        courses: state.courseReducer.courses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCourses) ;
