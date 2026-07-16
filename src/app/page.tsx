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

const publications = [
  {
    number: "01",
    title:
      "Survey Instruments Used to Study Mental Health Among STEM Graduate Students",
    venue: "IEEE Frontiers in Education Conference",
    year: "2025",
    type: "Peer-Reviewed Conference Publication",
    description:
      "A systematic examination of survey instruments used to study mental health among graduate students in STEM disciplines.",
    status: "PUBLISHED",
    href: "#",
  },
  {
    number: "02",
    title:
      "Photoelicitation and Coping Strategies Among First-Generation and Low-SES Engineering Students",
    venue: "ASEE Annual Conference",
    year: "2026",
    type: "Engineering Education Research",
    description:
      "Research examining coping strategies and academic experiences among first-generation and low-socioeconomic-status engineering students.",
    status: "PUBLISHED",
    href: "#",
  },
];

const pcBuilds = [
  {
    number: "01",
    title: "Personal Gaming and Engineering Workstation",
    processor: "AMD Ryzen 7 7700X",
    graphics: "NVIDIA RTX 3060",
    description:
      "A compact desktop configured for gaming, FPGA development, RTL simulation, programming, and general engineering coursework.",
    tags: ["PC Assembly", "Thermal Management", "Troubleshooting"],
  },
  {
    number: "02",
    title: "Custom PC Build",
    processor: "Processor details",
    graphics: "Graphics details",
    description:
      "Add a concise description of the system, its purpose, and the decisions you made while selecting and assembling components.",
    tags: ["Component Selection", "Cable Management", "System Validation"],
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

          <div className="hidden items-center gap-7 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-muted-text lg:flex">
  <a className="transition hover:text-green-light" href="#projects">
    PROJECTS
  </a>

  <a className="transition hover:text-green-light" href="#publications">
    PUBLICATIONS
  </a>

  <a className="transition hover:text-green-light" href="#builds">
    PC BUILDS
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

<section
  id="publications"
  className="border-b border-panel-border bg-background-deep px-6 py-28 lg:px-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
      <div>
        <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.18em] text-amber">
          02 // PUBLICATIONS
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Research and published work.
        </h2>
      </div>

      <p className="leading-7 text-muted-text">
        Peer-reviewed engineering education research focused on student mental
        health, coping strategies, academic stress, and retention.
      </p>
    </div>

    <div className="space-y-5">
      {publications.map((publication) => (
        <article
          key={publication.title}
          className="group grid gap-8 border border-panel-border bg-surface p-7 transition hover:border-green sm:p-9 lg:grid-cols-[100px_1fr_auto]"
        >
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-2xl text-amber">
              {publication.number}
            </p>

            <p className="mt-2 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.12em] text-dim-text">
              {publication.year}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-green-dark bg-green-dark/30 px-3 py-1 font-[family-name:var(--font-ibm-plex-mono)] text-[9px] tracking-[0.1em] text-green-light">
                {publication.status}
              </span>

              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.08em] text-dim-text">
                {publication.type.toUpperCase()}
              </span>
            </div>

            <h3 className="mt-5 max-w-4xl text-2xl font-semibold leading-snug">
              {publication.title}
            </h3>

            <p className="mt-3 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-amber-light">
              {publication.venue} · {publication.year}
            </p>

            <p className="mt-5 max-w-3xl leading-7 text-muted-text">
              {publication.description}
            </p>
          </div>

          <div className="flex items-start lg:justify-end">
            {publication.href !== "#" ? (
              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-panel-border px-4 py-2.5 text-xs font-semibold transition hover:border-amber hover:text-amber-light"
              >
                VIEW PAPER
                <ArrowIcon />
              </a>
            ) : (
              <span className="border border-panel-border px-4 py-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-[9px] tracking-[0.1em] text-dim-text">
                LINK PENDING
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

<section
  id="builds"
  className="border-b border-panel-border bg-background px-6 py-28 lg:px-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <div>
        <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.18em] text-amber">
          03 // PC BUILDS
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Systems built beyond the FPGA.
        </h2>
      </div>

      <p className="max-w-lg leading-7 text-muted-text">
        Personal computer builds that reflect my interest in component
        selection, system assembly, performance tuning, cooling, and hardware
        troubleshooting.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {pcBuilds.map((build) => (
        <article
          key={build.number}
          className="group overflow-hidden border border-panel-border bg-surface transition hover:border-green"
        >
          <div className="technical-grid relative flex min-h-72 items-center justify-center border-b border-panel-border bg-background-deep p-8">
            <div className="absolute left-5 top-5 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-amber">
              BUILD // {build.number}
            </div>

            <div className="w-full max-w-sm border border-panel-border bg-surface/95 p-5 panel-shadow">
              <div className="mb-5 flex items-center justify-between border-b border-panel-border pb-3">
                <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.1em] text-green-light">
                  SYSTEM CONFIGURATION
                </span>

                <StatusDot />
              </div>

              <div className="space-y-3 font-[family-name:var(--font-ibm-plex-mono)] text-xs">
                <div className="grid grid-cols-[90px_1fr] gap-4">
                  <span className="text-dim-text">CPU</span>
                  <span>{build.processor}</span>
                </div>

                <div className="grid grid-cols-[90px_1fr] gap-4">
                  <span className="text-dim-text">GPU</span>
                  <span>{build.graphics}</span>
                </div>

                <div className="grid grid-cols-[90px_1fr] gap-4">
                  <span className="text-dim-text">STATUS</span>
                  <span className="text-green-light">OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <h3 className="text-2xl font-semibold">{build.title}</h3>

            <p className="mt-4 leading-7 text-muted-text">
              {build.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {build.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-panel-border bg-background-deep px-3 py-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-[9px] tracking-[0.08em] text-green-pale"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="mt-8 flex items-center gap-2 text-sm font-semibold text-green-light transition hover:text-green-pale"
            >
              VIEW BUILD
              <ArrowIcon />
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="profile" className="bg-background-deep px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.18em] text-amber">
              04 // TECHNICAL PROFILE
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
              05 // CONTACT
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