import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import {CreatePage} from "./domain/createPage";
import {ListPage} from "./domain/listPage";
import {Shell} from "./shared/shell";




function App() {
    return (
        <BrowserRouter>
            <Shell />
        </BrowserRouter>
    );
}

export default App;
