import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import Purchase from "./Components/Purchase";
import RequirAuth from "./Components/RequirAuth";
import Dashboard from "./pages/Dashboard";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import MyOrder from "./pages/MyOrder";
import Singup from "./pages/Singup";
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequirAuth>
              <Purchase></Purchase>
            </RequirAuth>
          }
        ></Route>
        <Route path="/singup" element={<Singup></Singup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="dasboard" element={<Dashboard></Dashboard>}>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
