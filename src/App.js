import './App.css';
import Home from "./Pages/Home";
import  Articles  from './Pages/Articles';
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/articles' element={<Articles/>}/>
            </Routes>
        </div>
    );
}

export default App;
