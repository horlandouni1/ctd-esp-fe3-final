import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            {/* Ruta por defecto que redirige al Home */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Rutas de las páginas */}
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
