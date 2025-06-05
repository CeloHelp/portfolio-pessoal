// App.jsx

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound";
import  HomePage  from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

