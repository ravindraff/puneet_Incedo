// import React, {useState} from 'react'

// export default function AddCourse() {

//     const [title, setTitle] = useState('')
//     const [summary, setSummary] = useState('')

//     const handleTitleChange = ($event) => {
//         // console.log($event.target.value)
//         // if($event.target.value.length< 6){

//         // }
//         setTitle($event.target.value)

//     }
//     const handleSummaryChange = ($event) => {
//         // console.log($event.target.value)
//         setSummary($event.target.value)
//     }


//     const addCourse = (index)=>{
        

//         var newCourses = [ ...courses ]
//         newCourses.push({title, summary})
//         console.log(newCourses);
//         setCourses(newCourses);
//         setTitle('') 
//         setSummary('')
//     }
//     return (
//         <>
//              <h2>Add Course</h2>
//                 <div class="input-group mb-3">
//                 <span class="input-group-text" id="basic-addon1">Title</span>
//                 <input type="text" class="form-control" onChange={handleTitleChange} value={title} placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
//                 </div>
//                 <div class="input-group mb-3">
//                 <span class="input-group-text" id="basic-addon1">Summary</span>
//                 <input type="text" class="form-control"  onChange={handleSummaryChange} value={summary} placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
//                 </div>
//                 <div class="input-group mb-3">
//                 <button onClick={addCourse} className="btn btn-primary">Add Course</button>
//                 </div>
//         </>
//     )
// }
