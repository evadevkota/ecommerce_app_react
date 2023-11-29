
import { React } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function ClothItem(props) {
  let { title, description, price, image, category } = props;
  const AddToCart=()=>{
  
  }
  

  return (
    <div>
      <div>
        <div
          className="card mx-2 my-2"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            // position: 'absolute',
            right: "0",
            width: "18rem",
            position: "relative",

            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",

            // alignItems: "center",
            transition: "height 0.3s ease", // Add smooth transition
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {" "}
            <i
              className="fa-solid fa-cart-shopping mx-4" onClick={AddToCart}
              style={{ color: "white", cursor:"pointer"}}
            ></i>{" "}
            Price:{price}{" "}
          </span>

          <div>
            <img
              src={image}
              style={{
                paddingLeft: "45px",
                width: "200px",
                paddingTop: "10px",
                height: "230px",

                objectFit: "all",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
              className="card-img-top"
              alt="..."
            />
            <div className="container text-center">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontFamily: "Times", color: "#333" }}
              >
                {title}
              </h5>
            </div>
          </div>
          <p
            className="container mx-4 my-2"
            style={{
              paddingLeft: "30px",
              alignItems: "center",
            }}
          >
            <button
              className="btn btn-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{
                fontSize: "12px",
                borderRadius: "8px",
                alignItems: "center",
              }}
            >
              About this product
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <p
                className="card-text"
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "#555",
                }}
              >
                {description}
              </p>
              <p
                className="card-text"
                style={{ fontSize: "1rem", color: "#555" }}
              >
                Category:{category}
              </p>
            </div>

            <div className="card-footer bg-transparent border-top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClothItem;
