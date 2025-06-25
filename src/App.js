import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";

function App() {
  return (
    <div style={{background: "#fafbff", minHeight: "100vh"}}>
      <Banner />
      <ProductList />
    </div>
  );
}

export default App;
