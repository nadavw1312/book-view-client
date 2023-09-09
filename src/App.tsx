import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BreakPointProvider } from "./context/breakPointContext";
import { HomeContextProvider } from "./context/homeContext";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BreakPointProvider>
          <Routes>
            <Route
              path="/"
              element={
                <HomeContextProvider>
                  <Home />
                </HomeContextProvider>
              }
            />
            <Route path="/books/create" element={<CreateBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
          </Routes>
        </BreakPointProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
