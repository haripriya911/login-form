import HeaderFolder from "./HeaderFolder/HeaderFolder";
import "./App.css";
import FooterFolder from "./FooterFolder/FooterFolder";
import FormFolder from "./FormFolder/FormFolder";
import ListUser from "./ListUsers/ListUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderFolder name="Login Form" />
                <FormFolder />
                <FooterFolder />
              </>
            }
          ></Route>
           <Route
            path="/home"
            element={
              <ListUser/>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
