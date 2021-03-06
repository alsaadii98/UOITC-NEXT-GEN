import "./App.css";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
