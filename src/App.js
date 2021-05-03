import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";

import { Header, Content, Footer } from "@features";

function App() {
  return (
    <Router>
      <Header />
      <hr />
      <Content>
        <Routes />
      </Content>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
