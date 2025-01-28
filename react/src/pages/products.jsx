import "../styles/product.css";
import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //fetch products when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <main>
      <section>
        <div className="filter-group">
          <p>Filter:</p>
          <button
            className="filter-btn"
            onClick={() => handleFilter("professional")}
          >
            Professional
          </button>
          <button className="filter-btn" onClick={() => handleFilter("indoor")}>
            Indoor
          </button>
          <button
            className="filter-btn"
            onClick={() => handleFilter("outdoor")}
          >
            Outdoor
          </button>
          <button
            className="filter-btn"
            onClick={() => handleFilter("accessory")}
          >
            Accessory
          </button>
          <button className="filter-btn" onClick={() => handleFilter("all")}>
            All
          </button>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`product-item ${product.category.toLowerCase()}`}
            >
              <img src={product.photo} alt={product.prodName} />
              <h3>{product.prodName}</h3>
              <p>{product.prodDescription}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
