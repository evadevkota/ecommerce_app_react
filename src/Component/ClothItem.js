import { React } from "react";
import '@fortawesome/fontawesome-free/css/all.css';


function ClothItem(props) {
  let { title, description, price, image, category } = props;

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
          <span className="badge rounded-pill bg-danger"><i class="fa-solid fa-cart-shopping"></i> Price:{price}</span>

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
            <div class="container text-center"></div>
          </div>
          <div className="container">
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontFamily: "Times", color: "#333" }}
              >
                {title}
              </h5>
              <p
                className="container mx-4 my-2"
                style={{
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
                    style={{ fontSize: "1rem", color: "#555" }}
                  >
                    {description}
                  </p>
                  <p
                    className="card-text"
                    style={{ fontSize: "12px", color: "#555" }}
                  >
                    Category:{category}
                  </p>
                </div>

                <div className="card-footer bg-transparent border-top-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClothItem;
