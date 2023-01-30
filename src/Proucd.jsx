import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function products() {
  const [items, setItems] = useState([]);

  const { Id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${Id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [Id]);
  return (
    <>
      <div className="container Info bg-white py-5 px-4 mb-2 border border-primary mt-5 position-relative">
        <div className="row">
          <div className="col-12 col-md-5">
            <img src={items.image} alt={items.category} />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column gap-3">
            <h2>
              <strong>Title:</strong>
              {items.title}
            </h2>
            <h3>
              <strong>Category:</strong>
              {items.category}
            </h3>
            <p>
              <strong>description:</strong>
              {items.description}
            </p>
            <div className="d-flex justify-content-between">
              <h5>
                <strong>Rate:</strong>
                ⭐️{items.rating?.rate}/5
              </h5>
              <h5>
                <strong>Count:</strong>
                {items.rating?.count}
              </h5>
            </div>
            <h3 className="text-warning">
              <strong className="text-dark">Price:</strong>${items.price}
            </h3>
          </div>
        </div>
        <Link
          to="/"
          style={{
            left: "50%",
            transform: "translate(-50%,-50%)",
            bottom: "-5em",
          }}
          className="btn bg-success text-white px-4 py-3 fs-4 mt-5 m-auto position-absolute"
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Orqaga
        </Link>
      </div>
    </>
  );
}

export default products;
