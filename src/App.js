import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default React.memo(App);
