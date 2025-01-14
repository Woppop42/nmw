import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { WaitingPage } from "./components/WaitingPage"

function App()
{
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" Component={WaitingPage} />
        </Routes>

        </BrowserRouter>
    );
    }

export default App;