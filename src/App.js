import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.scss";

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
