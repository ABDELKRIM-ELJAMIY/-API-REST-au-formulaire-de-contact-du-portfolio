import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./compenents/Navigator";
import Home from "./compenents/Home";
import About from "./compenents/about";
import Projects from "./compenents/Project";
import Contact from "./compenents/Contact";
import Skills from "./compenents/skills";
import AdminPage from "./compenents/admin";
import 'boxicons/css/boxicons.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Sidenav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />
          {/* ✅ Fix: Use 'element' for AdminPage */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
