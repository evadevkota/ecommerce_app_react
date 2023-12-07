import React, { useState, useEffect } from "react";
import ClothItem from "./ClothItem";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

// import PropTypes from 'prop-types'
function Clothes(props) {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        props.setProgress(10);
        setLoading(true);

        const response = await fetch("https://fakestoreapi.com/products");

        props.setProgress(20);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();

        props.setProgress(30);
        setData(jsonData);
        props.setProgress(100);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false even in case of an error
      }
    };

    if (localStorage.getItem("token")) {
      fetchData();
    } else {
      navigate("/login");
    }
  }, []); // Dependency array is empty, so this effect runs only once when the component mounts

  return (
    <div>
      <div className="row">
        {loading && <Spinner />}

        {data.map((products) => {
          return (
            <div className="col-md-4" key={products.id}>
              <ClothItem
                title={
                  products.title.length > 50
                    ? products.title.slice(0, 40) + "..."
                    : products.title
                }
                description={
                  products.description.length > 50
                    ? products.description.slice(0, 130) + "..."
                    : products.description
                }
                price={products.price}
                category={products.category}
                image={products.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clothes;
