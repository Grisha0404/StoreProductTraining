import React from 'react';
import './App.css';
import {RoutesPage} from "./routes/Routes";
import {Nav} from "./routes/Link/Nav";

function App() {
    return (
        <div className="App">
            <Nav/>
            <RoutesPage/>
        </div>
    );
}

export default App;
