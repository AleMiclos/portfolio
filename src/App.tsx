import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./index.css";

function App() {
  return (
    <>
    <Nav />
      <Header />
      <main>
        <div className="main-content">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
