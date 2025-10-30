import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/HomePage";
import UpdateForm from "./components/UpdateForm";
import PostForm from "./components/PostForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/update/:id" element={<UpdateForm />} />
        <Route path="/product/post" element={<PostForm />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
