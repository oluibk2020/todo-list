import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <main>
                    <TodoForm />
                  </main>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;
