
import { Subject, map } from 'rxjs';
import {ajax} from 'rxjs/ajax'

const subject = new Subject();

export const courseService = {

     fetchCourses : () => {
            const response = ajax('http://localhost:8080/courses/').pipe(map(e => e.response))
            console.log(response);
            
            response.subscribe(res => {
                console.log(res);
                subject.next(res);
            })    
    
    },

    getCourses: () => subject.asObservable()


}