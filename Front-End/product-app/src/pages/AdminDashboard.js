import { useState, useEffect } from "react";
import axios from "axios"
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
const Add = () => {
    const [product, setProduct] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
const[userId,setUserId]=useState([])

  const fetchData = async (e) => {
    e.preventDefault();
    console.log("calling this function");
    const formData = new FormData();
    console.log("calling form data")
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("userId",userId)
    console.log("Form Data:", formData);
   console.log("gooo")
    try {
      const response = await axios.post(
        "http://localhost:4001/product/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
   
      setProduct(response.data.product);
      console.log(product);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
   };
   
  //fetch inorder to delete data
  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:4001/product/${productId}`);
      console.log("product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const fetchproducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4001/product/"
      );

      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);
  console.log("product", products);
  return (
    <>
      <div className="product">
        
        <div className="product-description">
          <div className="products-change">
            <h2>Add product</h2>
            <form className="form" onSubmit={fetchData}>
              <label for="title">title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
                <label for="category">category</label>
   <input
                type="text"
                id="category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
                <label for="description">description</label>
                 <input
                type="text"
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              ></input>
             <label for="price">price</label>
                 <input
                type="text"
                id="price"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              ></input>
               <label for="userId">userId</label>
                 <input
                type="text"
                id="userId"
                name="userId"
                onChange={(e) => setUserId(e.target.value)}
              ></input>
            
              <button type="submit">Submit</button>
            </form>
          </div>{" "}
       
          <div className="product-edit">
            {products.map((product) => (
              <div key={product.id}>
               

                <p>{product?.title}</p>
                <p>{product?.category}</p>
                <p>{product?.description}</p>
                <p>price:{product?.price}</p>
              
<div className="buttons">
               <button className="link-button"><Link to={`/edit/${product.id}`}>Edit</Link></button>

                <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
