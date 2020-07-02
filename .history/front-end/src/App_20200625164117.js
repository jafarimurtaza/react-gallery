import React from "react";
import "./App.css";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")

  }

  const removeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")

  }

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <Link className="gallery1" to="/">Gallery</Link>
         
        </div>
        <div className="header-links">
          <a href="dashboard.html">Dashboard</a>
          <a href="signin.html">Sign in </a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Gallery Categories</h3>
        <button className="remove-sidebar" onClick={removeMenu}>
          {" "}
          <i className="fa fa-arrow-left"></i>
        </button>
        <ul>
          <li>
            <a href="index.html">animals</a>
          </li>
          <li>
            <a href="index.html">Nature</a>
          </li>
          <li>
            <a href="index.html">House</a>
          </li>
          <li>
            <a href="index.html">Background</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          

        </div>
        <footer className="footer">
          Made by@ <b>Murtaza</b>
        </footer>
      </main>
    </div>
    </BrowserRouter>
  );
}
export default App;
