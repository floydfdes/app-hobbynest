import "./App.scss";
import Appnavbar from "./components/Layout/Appnavbar";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { checkTokenExpiry } from "./utills/checkTokenExpiry";

function App() {
  checkTokenExpiry();
  return (
    <>
      <BrowserRouter>
        <Appnavbar></Appnavbar>
        <Home></Home>
      </BrowserRouter>
    </>
  );
}

export default App;
