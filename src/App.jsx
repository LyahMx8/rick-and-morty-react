import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import { Navbar } from "./components/Navbar/Navbar";
import { Characters } from "./components/Characters/Characters";
import { Character } from "./components/Character/Character";

function App() {

  return (
    <>
      <div className="main">
        <Navbar brand="Rick And Morty App" />

        <BrowserRouter>
          <Routes>
            <Route 
             path="/"
             element={<Characters />}>
            </Route>

            <Route 
              path="/personaje/:id"
              element={<Character />}>
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
