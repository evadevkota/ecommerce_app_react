import React, { useState, useEffect } from "react";
import ClothItem from "./ClothItem";

// import PropTypes from 'prop-types'
function Clothes(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Include props in the dependency array if it's being used inside the effect
  }, [props]);

  return (
    <div>

      <div className="row">
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
