import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24 lg:px-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500 md:mx-0">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
          <a
            href="#explore"
            className="brand-gradient-bg w-full rounded-xl px-6 py-3 text-center font-semibold text-white shadow-sm sm:w-auto"
          >
            Explore Technologies
          </a>
          <a
            href="#explore"
            className="w-full rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img src={banner} alt="Layered development stack illustration" className="mx-auto w-full max-w-md" />
      </div>
    </section>
  );
}

export default Hero;
