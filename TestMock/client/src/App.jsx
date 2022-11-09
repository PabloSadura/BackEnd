import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from "./component/navBar/Navbar";
import ListProducts from "./component/listProducts/ListProducts";
import AddProducts from "./component/formProducts/AddProducts";
import { LoginProvider } from "./context/LoginContext";
import Chat from "./component/chat/Chat";
import FormLogin from "./component/formLogin/formLogin";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <div>
          <NavbarHeader />
          <Routes>
            <Route path="/" element={<ListProducts />} />
            <Route path="/agregarProducts" element={<AddProducts />} />
            <Route path="/login" element={<FormLogin />} />
          </Routes>
          <Chat />
        </div>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
