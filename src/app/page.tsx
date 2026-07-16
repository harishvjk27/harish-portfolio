const projects = [
  {
    number: "01",
    category: "FPGA COMMUNICATION",
    title: "FPGA UART Communication & DSP Platform",
    description:
      "A modular SystemVerilog platform integrating UART transmission and reception, FIFO buffering, command parsing, multi-character response control, and DSP visualization.",
    technologies: [
      "SystemVerilog",
      "Intel MAX 10",
      "ModelSim",
      "Quartus",
      "CP2102",
    ],
    status: "HARDWARE VERIFIED",
    visualTitle: "UART DATA PATH",
    visualLines: [
      "PC TERMINAL",
      "UART RX",
      "8-BYTE FIFO",
      "COMMAND PARSER",
      "RESPONSE FSM",
      "UART TX",
    ],
    github: "https://github.com/harishvjk27",
  },
  {
    number: "02",
    category: "COMPUTER ARCHITECTURE",
    title: "8-Bit CPU in SystemVerilog",
    description:
      "A modular processor featuring an ALU, four-register file, instruction decoder, program counter, instruction memory, and a multi-stage control FSM.",
    technologies: [
      "SystemVerilog",
      "RTL",
      "FPGA",
      "ALU",
      "Finite State Machines",
    ],
    status: "FPGA VALIDATED",
    visualTitle: "PROCESSOR DATA PATH",
    visualLines: [
      "PROGRAM COUNTER",
      "INSTRUCTION ROM",
      "DECODER",
      "REGISTER FILE",
      "ALU",
      "WRITEBACK",
    ],
    github: "https://github.com/harishvjk27",
  },
];

const skills = [
  "SystemVerilog",
  "Verilog",
  "VHDL",
  "RTL Design",
  "FPGA Design",
  "Computer Architecture",
  "ModelSim",
  "Cadence Xcelium",
  "Intel Quartus Prime",
  "Waveform Debugging",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function StatusDot({
  color = "green",
}: {
  color?: "green" | "amber" | "red";
}) {
  const colors = {
    green: "bg-green-light shadow-[0_0_12px_rgba(131,201,149,0.65)]",
    amber: "bg-amber shadow-[0_0_12px_rgba(214,164,76,0.55)]",
    red: "bg-status-red shadow-[0_0_12px_rgba(184,87,79,0.55)]",
  };

  return <span className={`h-2 w-2 rounded-full ${colors[color]}`} />;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background-deep font-[family-name:var(--font-manrope)] text-main-text">
      <div className="technical-grid hero-glow">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-3 font-[family-name:var(--font-ibm-plex-mono)]"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-panel-border bg-surface text-amber">
              HV
            </span>

            <div>
              <p className="text-sm font-semibold tracking-wide">
                HARISH VIJAYAKUMAR
              </p>
              <p className="text-[10px] tracking-[0.2em] text-dim-text">
                DIGITAL HARDWARE
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-muted-text md:flex">
            <a className="transition hover:text-green-light" href="#projects">
              PROJECTS
            </a>
            <a className="transition hover:text-green-light" href="#profile">
              PROFILE
            </a>
            <a className="transition hover:text-green-light" href="#contact">
              CONTACT
            </a>
          </div>
        </nav>

        <section
          id="top"
          className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10"
        >
          <div>
            <div className="mb-8 flex items-center gap-3 font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.18em] text-green-light">
              <StatusDot />
              SYSTEM ONLINE
            </div>

            <p className="mb-5 font-[family-name:var(--font-ibm-plex-mono)] text-sm tracking-[0.16em] text-amber">
              COMPUTER ENGINEERING @ GEORGIA TECH
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Building digital systems
              <span className="block text-green-light">
                from RTL to hardware.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-text">
              I design, simulate, and validate FPGA and digital hardware systems
              using SystemVerilog, ModelSim, Intel Quartus Prime, and Cadence
              tools.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 bg-green-light px-6 py-3.5 text-sm font-semibold text-background-deep transition hover:bg-green-pale"
              >
                VIEW PROJECTS
                <ArrowIcon />
              </a>

              <a
                href="https://github.com/harishvjk27"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-panel-border bg-surface/70 px-6 py-3.5 text-sm font-semibold transition hover:border-green hover:bg-surface-raised"
              >
                GITHUB
                <ArrowIcon />
              </a>

              <a
                href="/Harish_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-panel-border px-6 py-3.5 text-sm font-semibold transition hover:border-amber hover:text-amber-light"
              >
                RESUME
                <ArrowIcon />
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden border border-panel-border bg-panel-border sm:grid-cols-4">
              {[
                ["02", "FPGA PROJECTS"],
                ["115200", "UART BAUD"],
                ["08-BIT", "CPU WIDTH"],
                ["03", "RTL PROJECTS"],
              ].map(([value, label]) => (
                <div key={label} className="bg-background px-5 py-5">
                  <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xl text-amber-light">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.12em] text-dim-text">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-shadow relative border border-panel-border bg-surface/90 p-1">
            <div className="border border-green-dark bg-background-deep">
              <div className="flex items-center justify-between border-b border-panel-border px-5 py-4 font-[family-name:var(--font-ibm-plex-mono)]">
                <div className="flex items-center gap-3">
                  <StatusDot color="green" />
                  <span className="text-xs tracking-[0.14em] text-green-light">
                    HARDWARE PROFILE
                  </span>
                </div>

                <span className="text-[10px] text-dim-text">REV 2026.07</span>
              </div>

              <div className="space-y-1 p-5 font-[family-name:var(--font-ibm-plex-mono)] text-xs">
                {[
                  ["TARGET", "INTEL MAX 10"],
                  ["PRIMARY HDL", "SYSTEMVERILOG"],
                  ["FOCUS", "FPGA / RTL"],
                  ["VERIFICATION", "MODELSIM / XCELIUM"],
                  ["ARCHITECTURE", "DIGITAL SYSTEMS"],
                  ["LOCATION", "ATLANTA, GA"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[130px_1fr] border-b border-panel-border/60 py-3"
                  >
                    <span className="text-dim-text">{label}</span>
                    <span className="text-main-text">{value}</span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <p className="mb-3 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.15em] text-amber">
                  SIGNAL MONITOR
                </p>

                <div className="relative h-32 overflow-hidden border border-panel-border bg-blue-dark/40">
                  <svg
                    viewBox="0 0 600 150"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                    aria-label="Decorative digital waveform"
                  >
                    <polyline
                      points="0,100 60,100 60,35 125,35 125,100 185,100 185,55 245,55 245,100 315,100 315,25 390,25 390,100 455,100 455,60 520,60 520,100 600,100"
                      fill="none"
                      stroke="var(--green-light)"
                      strokeWidth="3"
                    />

                    <polyline
                      points="0,122 95,122 95,80 165,80 165,122 280,122 280,78 350,78 350,122 475,122 475,90 540,90 540,122 600,122"
                      fill="none"
                      stroke="var(--amber)"
                      strokeWidth="2"
                      opacity="0.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        id="projects"
        className="border-y border-panel-border bg-background px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.18em] text-amber">
                01 // FEATURED PROJECTS
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Hardware backed by evidence.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-muted-text">
              Each project includes RTL architecture, verification results, and
              hardware validation rather than only a summary of features.
            </p>
          </div>

          <div className="space-y-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group grid overflow-hidden border border-panel-border bg-surface transition duration-300 hover:border-green lg:grid-cols-2"
              >
                <div
                  className={`p-8 sm:p-10 lg:p-12 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-amber">
                      {project.number} / {project.category}
                    </p>

                    <div className="flex items-center gap-2 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] text-green-light">
                      <StatusDot />
                      {project.status}
                    </div>
                  </div>

                  <h3 className="mt-10 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl leading-7 text-muted-text">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-panel-border bg-background-deep px-3 py-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.08em] text-green-pale"
                      >
                        {technology.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-5">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-semibold text-green-light transition hover:text-green-pale"
                    >
                      VIEW PROJECT
                      <ArrowIcon />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-text transition hover:text-amber-light"
                    >
                      GITHUB
                      <ArrowIcon />
                    </a>
                  </div>
                </div>

                <div
                  className={`technical-grid flex min-h-[420px] items-center justify-center border-t border-panel-border bg-background-deep p-8 lg:border-t-0 ${
                    index % 2 === 1
                      ? "lg:order-1 lg:border-r"
                      : "lg:border-l"
                  }`}
                >
                  <div className="w-full max-w-md border border-panel-border bg-surface/95 p-6 panel-shadow">
                    <div className="mb-6 flex items-center justify-between border-b border-panel-border pb-4">
                      <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.12em] text-amber">
                        {project.visualTitle}
                      </span>

                      <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[9px] text-dim-text">
                        LIVE PATH
                      </span>
                    </div>

                    <div className="space-y-3">
                      {project.visualLines.map((line, lineIndex) => (
                        <div key={line}>
                          <div className="flex items-center gap-4">
                            <span className="flex h-7 w-7 items-center justify-center border border-green-dark bg-green-dark/30 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] text-green-light">
                              {String(lineIndex + 1).padStart(2, "0")}
                            </span>

                            <div className="flex-1 border border-panel-border bg-background px-4 py-3 font-[family-name:var(--font-ibm-plex-mono)] text-xs">
                              {line}
                            </div>

                            <StatusDot
                              color={
                                lineIndex === project.visualLines.length - 1
                                  ? "amber"
                                  : "green"
                              }
                            />
                          </div>

                          {lineIndex < project.visualLines.length - 1 && (
                            <div className="ml-[13px] h-3 border-l border-green" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="mt-10 grid gap-8 border border-panel-border bg-surface p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-amber">
                03 / ASIC DESIGN FLOW
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Digital Calculator Chip Design
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-muted-text">
                A 64-bit arithmetic controller implemented in SystemVerilog,
                verified using Xcelium and SimVision, and synthesized through
                Cadence Innovus with SRAM behavior validation.
              </p>
            </div>

            <a
              href="#"
              className="flex items-center gap-3 border border-panel-border px-5 py-3 text-sm font-semibold transition hover:border-amber hover:text-amber-light"
            >
              VIEW SUMMARY
              <ArrowIcon />
            </a>
          </article>
        </div>
      </section>

      <section id="profile" className="bg-background-deep px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.18em] text-amber">
              02 // TECHNICAL PROFILE
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Focused on digital hardware.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-muted-text">
              My work focuses on RTL design, FPGA implementation, computer
              architecture, digital verification, and hardware bring-up.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-panel-border bg-panel-border sm:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-surface px-5 py-6 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-green-pale transition hover:bg-surface-raised hover:text-amber-light"
              >
                {skill.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-panel-border bg-background px-6 py-14 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
              03 // CONTACT
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Harish Vijayakumar
            </h2>

            <a
              href="mailto:hvijayakumar32@gatech.edu"
              className="mt-3 block text-muted-text transition hover:text-green-light"
            >
              hvijayakumar32@gatech.edu
            </a>
          </div>

          <div className="flex gap-6 font-[family-name:var(--font-ibm-plex-mono)] text-xs">
            <a
              href="https://github.com/harishvjk27"
              target="_blank"
              rel="noreferrer"
              className="text-muted-text transition hover:text-green-light"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/harishvjk/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-text transition hover:text-green-light"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}