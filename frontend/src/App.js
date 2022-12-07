import { Container } from "react-bootstrap";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// PAGES
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Homepage />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
