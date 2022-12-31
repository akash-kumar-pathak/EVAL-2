import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BasicPage } from "../components/BasicPage";

function Products() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const displayItems = products.map((product, index) => (
    <div key={index} className="card">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button>
        <Link to={`/product/${product.id}`}>More Details</Link>
      </button>
    </div>
  ));

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {displayItems}
      <BasicPage title="Products" />
    </>
  );
}

export default Products;
