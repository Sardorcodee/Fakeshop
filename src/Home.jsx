import "./App.css";
import Pro from "./Proucd";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
function Home() {
  const [Dataa, setDataa] = useState([]);
  const [Count, setCount] = useState(3);
  function buttonUp() {
    setCount(Count - 3);
  }
  function buttonDorn() {
    setCount(Count + 3);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${Count}`)
      .then((res) => res.json())
      .then((data) => setDataa(data));
  }, [Count]);

  return (
    <div className="container m-auto mt-5 bg-light pt-5">
      <Routes>
        <Route path="/info/:Id" element={<Pro />}></Route>
      </Routes>
      <div className="row justify-content-center   mb-5 gap-5">
        {console.log(Dataa)}
        {Dataa.length === 0 && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {Dataa.map((e) => (
          <div className="card col-11 col-md-3" key={e.id}>
            <img src={e.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.category}</p>
              <div className="d-flex justify-content-between">
                <strong className="text-warning">${e.price}</strong>
                <strong>⭐️{e.rating?.rate}/ 5</strong>
              </div>
              <Link to={`/info/${e.id}`} className="btn btn-success mt-3">
                More Info
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center py-3 gap-3">
        {Count >= 4 && (
          <button
            onClick={buttonUp}
            className="btn bg-success  text-white px-5 py-2"
          >
            <i className="fa-solid fa-minus fs-4"></i>
          </button>
        )}
        <button
          onClick={buttonDorn}
          className="btn bg-success  text-white px-5 py-2"
        >
          <i className="fa-solid fa-plus fs-4"></i>
        </button>
      </div>
    </div>
  );
}

export default Home;
