import logo from './logo.svg';
import './App.css';
import ViewCourses from './components/ViewCourses';
import DisplayCourses from './components/DisplayCourses';
import AddCourse from './components/AddCourse';
import ViewUsers from './components/ViewUsers';

function App() {
  return (
    <>
<ViewUsers></ViewUsers>
      <AddCourse></AddCourse>
      <hr/>
      <ViewCourses></ViewCourses>
      <hr/>
      <DisplayCourses></DisplayCourses>

    </>
  );
}

export default App;
