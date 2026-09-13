import { use } from 'react';
import { useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../types/technology";

function TechnologyExplorer({ technologiesPromise }: { technologiesPromise: Promise<Technology[]> }) {
  //const [technologies, setTechnologies] = useState<Technology[]>([]);
  //const [isLoading, setIsLoading] = useState(true);
  const technologies = use(technologiesPromise);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load the technology data from the JSON file once, on mount.
//   useEffect(async () => {
//     //let cancelled = false;
// const response = await fetch(`/technologies.json`);
//         const data: Technology[] = await response.json();
//         setTechnologies(data);
//     // async function loadTechnologies() {
//     //   try {
//     //    const response = await fetch(`/technologies.json`);
//     //     const data: Technology[] = await response.json();
//     //     if (!cancelled) setTechnologies(data);
//     //   } catch (error) {
//     //     if (!cancelled) toast.error("Could not load technology data.");
//     //   } finally {
//     //     if (!cancelled) setIsLoading(false);
//     //   }
//     // }

//     // loadTechnologies();
//     // return () => {
//     //   cancelled = true;
//     // };
//   }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Stack cleared.");
  };

  return (
    <section id="explore" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex-1">
          {isLoading ? (
            <div className="flex justify-center py-20 text-slate-400">
              Loading technologies...
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  technology={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          )}
        </div>

        <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
      </div>
    </section>
  );
}

export default TechnologyExplorer;
