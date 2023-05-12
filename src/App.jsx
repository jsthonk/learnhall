import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Header/Navbar";
import BookSession from "./pages/BookSession";
import BecomeTutor from "./pages/BecomeTutor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booksession" element={<BookSession />} />
        <Route path="/becometutor" element={<BecomeTutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
