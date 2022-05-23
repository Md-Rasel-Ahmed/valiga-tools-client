import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AddReview from "./Components/AddReview";
import EditProfile from "./Components/EditProfile";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import Purchase from "./Components/Purchase";
import RequirAuth from "./Components/RequirAuth";
import Dashboard from "./pages/Dashboard";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import MyOrder from "./pages/MyOrder";
import MyProfiile from "./pages/MyProfiile";
import Singup from "./pages/Singup";
import { ToastContainer } from "react-toastify";
import ReuirUser from "./Components/RequirUser";
import MangeAllOrder from "./Components/MangeAllOrder";
import ReuirAdmin from "./Components/ReuirAdmin";
import AddProduct from "./Components/AddProduct";
import AllUsers from "./Components/AllUser";
import Blog from "./pages/Blog";

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
        <Route
          path="dasboard"
          element={
            <RequirAuth>
              <Dashboard></Dashboard>
            </RequirAuth>
          }
        >
          {/* requir user auth */}
          <Route
            path="myorder"
            element={
              <ReuirUser>
                <MyOrder></MyOrder>
              </ReuirUser>
            }
          ></Route>
          <Route
            path="addreview"
            element={
              <ReuirUser>
                <AddReview></AddReview>
              </ReuirUser>
            }
          ></Route>
          <Route
            path="payment/:id"
            element={
              <ReuirUser>
                <Payment></Payment>
              </ReuirUser>
            }
          ></Route>

          {/* Requir Admin auth */}

          <Route
            path="manageorder"
            element={
              <ReuirAdmin>
                <MangeAllOrder></MangeAllOrder>
              </ReuirAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <ReuirAdmin>
                <AddProduct></AddProduct>
              </ReuirAdmin>
            }
          ></Route>
          <Route
            path="makeadmin"
            element={
              <ReuirAdmin>
                <AllUsers></AllUsers>
              </ReuirAdmin>
            }
          ></Route>

          <Route path="myprofile" element={<MyProfiile></MyProfiile>}></Route>

          <Route
            path="myprofile/eidtprofile"
            element={<EditProfile></EditProfile>}
          ></Route>
        </Route>
        {/* blog route */}
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
