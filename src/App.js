import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Purchase from "./Components/Purchase";
import Footer from "./pages/Footer";
import Singup from "./pages/Singup";
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>
        <Route path="/singup" element={<Singup></Singup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
