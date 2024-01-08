import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4001/product"
      );

      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Product Page</h1>
      <h3>
        <q>
          <i>
          Life is like sweets. · “There is no better way to bring people together than with dessert.
          </i>
        </q>
      </h3>
      <div className="product-container">
        <div className="body-product">
       
          {products.map((Product) => (
            <div key={Product.id}>
             

              <h2>{Product.title}</h2>
              <p>{Product.description}</p>
              <p>{Product.category}</p>
              <p>{Product.price}</p>
              <p>Created by: {Product?.user.username}</p>
              <Link to={`/productDetail/${Product.id}`}>See more details</Link>
            </div>
            
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default HomePage;
