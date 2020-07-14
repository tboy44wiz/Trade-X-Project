import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.scss';


import Header from "./components/Header";
import BodyContainer from "./components/body_container/BodyContainer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />

              <Route path="/" exact component={ BodyContainer } />
          </div>
      </BrowserRouter>
  );
}

export default App;
