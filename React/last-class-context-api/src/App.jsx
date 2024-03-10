import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./context/AdoptPetContext";
import SearchParams from "./pages/SearchParams";
import Details from "./pages/Details";
function App() {
  const queryClient = new QueryClient();
  const adoptedPet = useState(null);
  console.log('adoptedPet'  , adoptedPet)
  return (
    <div>
      <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;