import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyExplorer from "./components/TechnologyExplorer";
import Footer from "./components/Footer";
import { Suspense } from "react";
const technologiespromise = fetch(`/technologies.json`).then((res) => res.json());
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <TechnologyExplorer technologiesPromise={technologiespromise} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
