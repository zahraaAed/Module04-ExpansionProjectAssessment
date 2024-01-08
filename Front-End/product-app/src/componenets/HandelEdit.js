import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Handeledit() {
  const { productId } = useParams();

  const [values, setValues] = useState({
    title: '',
    category:'',
    description:'',
 
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4001/product/${productId}`)
      .then((res) => {
        setValues({
          ...values,
          title: res.data.product.title,
          description: res.data.product.description,
          category: res.data.product.category
        });
      })
      .catch((err) => console.log(err));
    console.log("this is it", productId);
    console.log(values);
  }, [productId]);

  const navigate = useNavigate();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:4001/product/${productId}`, values)
      .then((res) => {
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    <form className="form" onSubmit={handleEditSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
  <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={values.description}
          onChange={(e) => setValues({ ...values, description: e.target.value })}
        />
 <label htmlFor="category">category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={values.title}
          onChange={(e) => setValues({ ...values, category: e.target.value })}
        />
       <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={values.price}
          onChange={(e) => setValues({ ...values, price: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Handeledit;

