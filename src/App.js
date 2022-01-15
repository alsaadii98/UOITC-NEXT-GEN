import './App.css';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
            </Routes>
        </div>
    );
}

export default App;
