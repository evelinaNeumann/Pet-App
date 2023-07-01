import React, { useEffect, useState } from "react";
import ProductPage from "../ProductsPage/ProductsPage";
import LoginPage from "../LoginPage/LoginPage";


function ShopHomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5005/api/shop_products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1>Shop Home page</h1>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductPage
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
              quantity={product.quantity}
              image={product.image}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default ShopHomePage;
