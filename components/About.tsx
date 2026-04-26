export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div className="w-64 h-64 rounded-full bg-gray-700"></div>

      <div>
        <h2 className="text-4xl font-bold">
          ENGINEERING <span className="text-red-500">IMPACT.</span>
        </h2>

        <p className="text-gray-400 mt-6">
          I am Saikumar. Building scalable cloud and DevOps systems using modern tools.
        </p>

        <button className="mt-6 bg-red-600 px-6 py-3 rounded-lg">
          Collaborate
        </button>
      </div>

    </section>
  );
}
