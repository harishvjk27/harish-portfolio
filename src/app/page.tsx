const projects = [
  {
    title: "FPGA UART Communication & DSP Platform",
    description:
      "A modular SystemVerilog platform featuring UART TX/RX, FIFO buffering, command parsing, an FSM response engine, and DSP visualization.",
    technologies: ["SystemVerilog", "FPGA", "UART", "ModelSim"],
  },
  {
    title: "8-Bit CPU",
    description:
      "A modular processor datapath featuring an ALU, register file, instruction decoder, program counter, instruction memory, and FSM control.",
    technologies: ["SystemVerilog", "Computer Architecture", "FPGA"],
  },
  {
    title: "Digital Calculator Chip",
    description:
      "A 64-bit arithmetic design verified and synthesized using Cadence Xcelium, SimVision, and Innovus.",
    technologies: ["SystemVerilog", "Cadence", "RTL"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-semibold">
          Harish Vijayakumar
        </a>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Computer Engineering at Georgia Tech
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            I design and verify digital hardware systems.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            I am Harish Vijayakumar, a computer engineering student focused on
            FPGA development, RTL design, computer architecture, and digital
            verification.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="https://github.com/harishvjk27"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-700 px-5 py-3 font-medium transition hover:border-zinc-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harishvjk/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-700 px-5 py-3 font-medium transition hover:border-zinc-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-zinc-800 bg-zinc-900/40 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-4xl font-semibold">Featured Projects</h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-7"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Experience
        </p>

        <h2 className="mt-3 text-4xl font-semibold">
          Research and technical education
        </h2>

        <div className="mt-10 space-y-6">
          <article className="rounded-xl border border-zinc-800 p-7">
            <h3 className="text-xl font-semibold">
              Undergraduate Researcher — Cultivate Lab
            </h3>
            <p className="mt-3 text-zinc-400">
              Co-authored engineering education research and analyzed academic
              stress, coping strategies, and student retention.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-800 p-7">
            <h3 className="text-xl font-semibold">
              Peer Learning Assistant
            </h3>
            <p className="mt-3 text-zinc-400">
              Led weekly circuit and systems problem-solving sessions for more
              than 50 ECE students.
            </p>
          </article>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-zinc-800 px-6 py-12 text-zinc-400"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row">
          <p>Harish Vijayakumar</p>
          <a
            href="mailto:hvijayakumar32@gatech.edu"
            className="hover:text-white"
          >
            hvijayakumar32@gatech.edu
          </a>
        </div>
      </footer>
    </main>
  );
}