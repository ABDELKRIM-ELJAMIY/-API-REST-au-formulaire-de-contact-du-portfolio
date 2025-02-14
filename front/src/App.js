// import Navigator from "./compenents/Navigator";
import Sidenav from "./compenents/Navigator"
import Home from "./compenents/Home";
import About from "./compenents/about";
import Projects from "./compenents/Project";
import Contact from "./compenents/Contact"
import { initPopovers } from "flowbite";
import Skills from "./compenents/skills"
// import DarkModeToggle "./compenents/btndark";
// import DarkModeToggle from "./compenents/btndark"
import AdminPage from "./compenents/admin"
import { Route } from 'react-router-dom';
function App() {
  return (

    <div className="App">
      <Sidenav />
      <Router>
        <Route path="/" >
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Route>
        <Route path="/admin">
          <AdminPage/>

        </Route>
      </Router>


      {/* <DarkModeToggle /> */}

      {/* <h1 className="text-red-4000 text-red-800 bg-red-50">Hello</h1> */}
    </div>
  );
}

export default App;
