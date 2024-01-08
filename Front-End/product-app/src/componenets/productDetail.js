import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./productDetail.css";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
   
    title: '',
    description: '',
    category: '',
    price:'',
    user: { username: '' },
  });

  
  useEffect(() => {
    axios
      .get(`http://localhost:4001/product/${productId}`)
      .then((res) => {
        console.log("Received data from API:", res.data);
        setProduct(res.data.Product); 

      })
      .catch((err) => console.log(err));

  }, [productId]);

  return (
    <div>
      <h1>Detail</h1>
      <div className='product-detail'>
      <div className="body-product">
     <h2>{product?.title}</h2>
        <h4>category:{product?.category}</h4>
        <p>description:{product?.description}</p>
        <p>price:{product?.price}</p>
        <p>Created by: {product?.user.username}</p>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
