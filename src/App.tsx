import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import FormPage from "./components/FormPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/update/:id" element={<FormPage />} />
        <Route path="/product/post/" element={<FormPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
