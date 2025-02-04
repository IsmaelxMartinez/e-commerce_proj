import React from "react";

export default (props) => {
  return (
    <section className="product-section">
      <div className="product-container">
        {props.products.map((product) => (
          <div
            key={product.id}
            className={`product-item ${product.category.toLowerCase()}`}
          >
            <img
              className="product-image"
              src={product.photo}
              alt={product.prodName}
            />
            <h3>{product.prodName}</h3>
            <p>{product.prodDescription}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
