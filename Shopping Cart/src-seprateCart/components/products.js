import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/productsAction";

const productState = (state) => {
  console.log(state);
  return state.productsReducer.products;
};
export default function Products() {
  const shoes = useSelector(productState);
  const dispatch = useDispatch();
  // const [shoes, setShoes] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:8000/products/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setShoes(data);
    //   });
    dispatch(actions.fetchProducts());
  }, []);
  console.log(shoes);

  let list = shoes.map((shoe, i) => {
    const addCart = (product) => {
      dispatch(actions.addCart(product));
    };
    return (
      <li key={i}>
        <div
          className="card mb-3 shadow p-3 mb-5 bg-body rounded"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={shoe.src}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{shoe.title}</h5>
                {console.log("shoes data", shoe.title)}
                <p className="card-text">{shoe.desc}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addCart(shoe)}
                >
                  Add to cart
                </button>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="container shadow-sm p-3 mb-5 bg-body rounded">
      <h2>Shoes</h2>
      <ul className="list-unstyled">{list}</ul>
    </div>
  );
}
