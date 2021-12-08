import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
