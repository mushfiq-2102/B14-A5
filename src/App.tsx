import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyExplorer from "./components/TechnologyExplorer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TechnologyExplorer />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} newestOnTop />
    </div>
  );
}

export default App;
