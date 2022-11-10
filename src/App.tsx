import React from 'react';
import { Store } from "./components/Store";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TradesStore } from "./components/TradesStore";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Store/>}/>
                <Route path="/trades" element={<TradesStore/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
