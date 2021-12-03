import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';

export default class ViewCoursesWithClass extends Component {


    constructor(){
        super();

        console.log('in constructor...')
        this.state = {courses: [
            // {id: 23, title:'Angular', summary:'Angular is from google.. its a framework'},
            // {id: 13, title:'React', summary:'React is from facebook.. its a library'},
            // {id: 3, title:'Ember', summary:'Ember is open-source.. its a framework'}
        ]}
    }

    // @Deprecated
    // componentWillMount() {
    //     console.log('cwm...')
    // }

    componentDidMount() {
        console.log('cwd...')
        // fetch('http://localhost:8000/courses/')
        // .then(res=> res.json())
        // .then(data => {
        //     console.log(data)
        //     this.setState({courses: data});
        // })
        // .catch(err=>console.log(err))

        axios.get('http://localhost:8000/courses/')
        .then( (response) => {
          // handle success
          console.log(response.status)
          console.log(response.data);
          this.setState({courses: response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
     
        console.log('test fetch calling...')
    }
    
    

    handleDelete(index){
        console.log('handle delete  in parent', index)

        var newCourses = [ ...this.state.courses ]
        let courseDeleted = newCourses.splice(index, 1);
        console.log(courseDeleted[0]);
        // http call to server with method as DELETE
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
        this.setState({courses: newCourses});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate() {
        console.log('cdu...')
    }


    render() {

        console.log('in render...')
        let listCourses = this.state.courses.map((course, i)=>{
        return <Card key={course.id} idx={i} title={course.title} summary={course.summary} courseDeleted={this.handleDelete.bind(this)} ></Card>
    })


        return (
            <div className="container ">
                {listCourses}
               
            </div>
           
         
        )
    }
}
