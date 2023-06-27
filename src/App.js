import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoesStore from "./components/ShoesStore";
import Modal from "./components/Modal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ShoesStore />}></Route>
        <Route path="*" element={<ShoesStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
