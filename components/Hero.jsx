export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center p-20">
        <h1 className="text-5xl font-bold">
          Fanantenana Valisoa
        </h1>
        <p className="mt-4 text-xl">
          Développeur Web • Next.js
        </p>
        <a
          href="/projects"
          className=" bg-blue-500
          hover:bg-blue-600
          transition
          duration-300
          text-white
          px-6 py-3
          rounded-xl"
        >
          Voir mes projets
        </a>
      </section>
    );
  }
  