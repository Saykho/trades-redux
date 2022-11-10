import React from 'react';
import { Store } from "./components/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TradesStore } from "./components/TradesStore";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Store/>}/>
                <Route path="/trades" element={<TradesStore/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
