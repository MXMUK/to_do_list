import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Main from "./components/Main/Main";
import React from "react";

function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <Header />
        <Main />
        <Article />
      </div>
    </div>
  );
}

export default App;
