import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchParams from "./pages/SearchParams";
import Details from "./pages/Details";
function App() {

  return (
    <div>
      <BrowserRouter>

        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;