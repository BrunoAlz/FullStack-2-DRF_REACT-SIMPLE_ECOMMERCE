import { Container } from "react-bootstrap";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// PAGES
import Homepage from "./pages/Homepage";

// ROUTERS
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
