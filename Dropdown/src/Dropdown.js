import { useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [courses, setCourses] = useState([
    { id: 1, cuisine: "Angular", subCuisine: ["southIndian", "northIndian"] },
    { id: 2, cuisine: "React", subCuisine: ["fcd", "fcfe"] },
    { id: 3, cuisine: "Ember", subCuisine: ["cefc", "efwc"] },
    { id: 4, cuisine: "CanJS", subCuisine: ["sefc", "efwce"] },
  ]);
  const [caption, setCaption] = useState("");

  const toggleShow = () => {
    setShow(!show);
  };

  const handleItemChange = (item) => {
    console.log("In parent...", item);
    setCaption(item);
    setShow(false);
  };

  console.log(courses);

  let dropdownList = courses.map((course, i) => {
    // Nested component of Dropdown
    console.log(course);
    return (
      <DropdownItem
        key={i}
        itemText={course}
        itemChanged={handleItemChange}
      ></DropdownItem>
    );
  });

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        onClick={toggleShow}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {caption ? caption : "Select Cuisine"}
      </button>
      <ul
        className={show ? "dropdown-menu show" : "dropdown-menu"}
        aria-labelledby="dropdownMenuButton1"
      >
        {dropdownList}
        {/* <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
      </ul>
    </div>
  );
};

export default Dropdown;
