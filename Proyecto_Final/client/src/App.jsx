import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./component/navBar/Navbar";
import ListProducts from "./component/listProducts/ListProducts";
import AddProducts from "./component/formProducts/AddProducts";
import { LoginProvider } from "./context/LoginContext";
import Chat from "./component/chat/Chat";
import Search from "./component/search/Search";
function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <div>
          <NavbarHeader />
          <Routes>
            <Route path="/" element={<ListProducts />} />
            <Route path="/agregarProducts" element={<AddProducts />} />
          </Routes>
          <Chat />
        </div>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
