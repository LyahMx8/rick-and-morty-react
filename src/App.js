import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Characters } from "./components/Characters";
import { Character } from "./components/Character";

function App() {

  return (
    <>
      <div class="main">
        <Navbar brand="Rick And Morty App" />

        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Characters />
            </Route>

            <Route path="/personaje/:id">
              <Character />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
