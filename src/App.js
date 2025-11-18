// App.js
import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ProductList />
      </main>
    </>
  );
}

export default App;
