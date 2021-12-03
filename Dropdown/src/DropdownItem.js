import { useState } from "react";

export default function DropdownItem(props) {
  const [show, setShow] = useState(false);
  console.log("props", props);
  const handleItemClicked = () => {
    console.log("Item clicked: ", props.itemText.cuisine);
    props.itemChanged(props.itemText.cuisine);
  };
  const handleSubItemClicked = (item) => {
    console.log("Item clicked: ", item);
    props.itemChanged(item);
  };
  const toggleShow = () => {
    setShow(!show);
  };

  let dropdownSubList = props.itemText.subCuisine.map((item, i) => {
    // Nested component of Dropdown
    return (
      <li key={i}>
        <a
          className="dropdown-item"
          onClick={() => handleSubItemClicked(item)}
          href="#"
        >
          {item}
        </a>
      </li>
    );
  });
  return (
    <li>
      <div className="btn-group dropend">
        <button
          type="button"
          className="btn  dropdown-toggle p-4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleShow}
        >
          <a className="dropdown-item" onClick={handleItemClicked} href="#">
            {props.itemText.cuisine}
          </a>
        </button>
        <ul
          className={show ? "dropdown-menu show" : "dropdown-menu"}
          aria-labelledby="dropdownMenuButton1"
        >
          {dropdownSubList}
        </ul>
      </div>
    </li>
  );
}
