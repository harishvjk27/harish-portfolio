export type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  overview: string;
  technologies: string[];
  status: string;
  visualTitle: string;
  visualLines: string[];
  github: string | null;
  highlights: string[];
  images?: {
    src: string;
    alt: string;
  }[];
  videos?: {
    youtubeId: string;
    title: string;
  }[];
};

export type Publication = {
  number: string;
  slug: string;
  title: string;
  venue: string;
  year: string;
  type: string;
  description: string;
  status: string;
  href: string | null;
  topics: string[];
};

export type PcBuild = {
  number: string;
  slug: string;
  title: string;
  processor: string;
  graphics: string;
  memory: string;
  storage?: string;
  motherboard?: string;
  description: string;
  ownership: string;
  tags: string[];
  goals: string[];
  images: {
    src: string;
    alt: string;
  }[];
};

export type Experience = {
  organization: string;
  role: string;
  context: string;
  description: string;
  contribution: string;
  href: string;
};

export const experiences: Experience[] = [
  {
    organization: "RevSync",
    role: "Lead Hardware Engineer",
    context: "vehicle intelligence",
    description:
      "RevSync is developing a modular vehicle-intelligence platform that brings together telemetry, sensors, vehicle data, and real-time driver coaching.",
    contribution:
      "I'm supporting the team during its early business-development stage by helping present at Georgia Tech CREATE-X and create hardware requirements, platform choices, and designs.",
    href: "https://revsync.app/",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    slug: "fpga-uart-dsp-platform",
    category: "FPGA COMMUNICATION",
    title: "UART Communication & DSP Platform",
    shortDescription:
      "A modular SystemVerilog platform integrating UART communication, FIFO buffering, command parsing, multi-character response control, and DSP visualization.",
    overview:
      "This project implements a complete FPGA communication path between a computer terminal and an Intel MAX 10 FPGA. Incoming UART bytes are buffered, interpreted by a command parser, processed by control logic, and returned through a transmit path. The design was divided into modular RTL blocks so each component could be independently simulated, verified, and integrated.",
    technologies: [
      "SystemVerilog",
      "Intel MAX 10",
      "ModelSim",
      "Quartus Prime",
      "CP2102",
      "UART",
      "FIFO",
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
    github:
      "https://github.com/harishvjk27/QuartusProjects/tree/main/fpga-sensor-accelerator",
    highlights: [
      "Implemented UART receive and transmit modules in SystemVerilog.",
      "Integrated an 8-byte FIFO for buffered serial communication.",
      "Created command parsing and multi-character response control logic.",
      "Verified module behavior with ModelSim simulations and waveform analysis.",
      "Validated serial communication using physical FPGA hardware and a CP2102 interface.",
    ],
    images: [
      {
        src: "/fpga-project-navigator.png",
        alt: "Quartus Project Navigator showing the synthesized FPGA design hierarchy and logic utilization",
      },
      {
        src: "/fpga-uart-waveform.png",
        alt: "ModelSim waveform showing UART transmit and FIFO signals during simulation",
      },
    ],
    videos: [
      { youtubeId: "NAK6CtVayck", title: "Project demonstration 1" },
      { youtubeId: "d_OaONLjnS4", title: "Project demonstration 2" },
      { youtubeId: "9YgWn7VIyAc", title: "Project demonstration 3" },
    ],
  },
  {
    number: "02",
    slug: "8-bit-cpu",
    category: "COMPUTER ARCHITECTURE",
    title: "8-Bit CPU in SystemVerilog",
    shortDescription:
      "A modular processor featuring an ALU, four-register file, instruction decoder, program counter, instruction memory, and multi-stage control FSM.",
    overview:
      "This project explores processor architecture through the design of an 8-bit CPU in SystemVerilog. The processor includes a register file, arithmetic logic unit, instruction decoder, program counter, instruction memory, and control state machine. Each subsystem was designed and tested separately before being integrated into the complete processor.",
    technologies: [
      "SystemVerilog",
      "RTL Design",
      "FPGA",
      "ALU",
      "Register File",
      "Finite State Machines",
      "ModelSim",
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
    github:
      "https://github.com/harishvjk27/QuartusProjects/tree/main/8-bit-cpu",
    highlights: [
      "Designed an 8-bit arithmetic logic unit supporting core processor operations.",
      "Implemented a four-register storage architecture.",
      "Created instruction decode and processor control logic.",
      "Developed a multi-stage FSM for instruction execution.",
      "Simulated processor behavior and validated the integrated design on FPGA hardware.",
    ],
    videos: [
      { youtubeId: "Qf0wSjcDBiQ", title: "8-bit CPU demonstration" },
    ],
  },
  {
    number: "03",
    slug: "digital-calculator-chip",
    category: "ASIC DESIGN FLOW",
    title: "Digital Calculator Chip Design",
    shortDescription:
      "A 64-bit arithmetic controller implemented in SystemVerilog and verified through Cadence simulation and physical-design tools.",
    overview:
      "This project followed a digital ASIC design workflow beginning with RTL implementation and functional verification. The arithmetic controller was simulated using Cadence Xcelium and inspected through SimVision before synthesis and physical-design exploration in Cadence Innovus.",
    technologies: [
      "SystemVerilog",
      "Cadence Xcelium",
      "SimVision",
      "Cadence Innovus",
      "ASIC Design",
      "RTL Verification",
    ],
    status: "RTL VERIFIED",
    visualTitle: "ASIC DESIGN FLOW",
    visualLines: [
      "RTL DESIGN",
      "TESTBENCH",
      "XCELIUM",
      "SIMVISION",
      "SYNTHESIS",
      "INNOVUS",
    ],
    github: null,
    highlights: [
      "Implemented a 64-bit arithmetic controller in SystemVerilog.",
      "Developed testbench logic for functional verification.",
      "Analyzed simulation behavior using Xcelium and SimVision.",
      "Explored synthesis and physical implementation using Cadence Innovus.",
      "Validated arithmetic and SRAM-related behavior through simulation.",
    ],
    images: [
      {
        src: "/calculator-chip-drc.webp",
        alt: "Cadence Innovus physical layout and a completed design-rule check reporting zero violations",
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    number: "01",
    slug: "stem-graduate-mental-health-survey-instruments",
    title:
      "Survey Instruments Used to Study Mental Health Among STEM Graduate Students",
    venue: "IEEE Frontiers in Education Conference",
    year: "2025",
    type: "Peer-Reviewed Conference Publication",
    description:
      "A systematic examination of survey instruments used to study mental health among graduate students in STEM disciplines.",
    status: "PUBLISHED",
    href: "https://ieeexplore.ieee.org/document/11328435",
    topics: [
      "Engineering Education",
      "Graduate Student Mental Health",
      "Survey Instruments",
      "Systematic Review",
    ],
  },
  {
    number: "02",
    slug: "photoelicitation-coping-strategies",
    title:
      "Photoelicitation and Coping Strategies Among First-Generation and Low-SES Engineering Students",
    venue: "ASEE Annual Conference",
    year: "2026",
    type: "Engineering Education Research",
    description:
      "Research examining coping strategies and academic experiences among first-generation and low-socioeconomic-status engineering students.",
    status: "PUBLISHED",
    href: "https://nemo.asee.org/public/conferences/374/papers/51850/view",
    topics: [
      "Engineering Education",
      "Photoelicitation",
      "First-Generation Students",
      "Student Coping Strategies",
    ],
  },
];

export const pcBuilds: PcBuild[] = [
  {
    number: "01",
    slug: "gaming-engineering-workstation",
    title: "Personal Gaming and Engineering Workstation",
    processor: "AMD Ryzen 7 5700X",
    graphics: "NVIDIA GeForce RTX 3060",
    memory: "32GB Corsair Vengeance",
    description:
      "My personal desktop, assembled and configured for gaming, FPGA development, RTL simulation, programming, and engineering coursework.",
    ownership: "Personal build",
    tags: [
      "PC Assembly",
      "Thermal Management",
      "Component Selection",
      "Troubleshooting",
    ],
    goals: [
      "Support FPGA development and RTL simulation workloads.",
      "Provide strong high-refresh-rate gaming performance.",
      "Maintain stable temperatures under sustained load.",
      "Allow straightforward future component upgrades.",
    ],
    images: [
      {
        src: "/personal-build.webp",
        alt: "Harish's personal Ryzen 7 and RTX 3060 desktop with red internal lighting",
      },
    ],
  },
  {
    number: "02",
    slug: "rtx-3070-friend-build",
    title: "RTX 3070 Gaming Build",
    processor: "Intel Core i7-9700K",
    graphics: "NVIDIA GeForce RTX 3070 Founders Edition",
    memory: "32GB G.Skill Trident",
    description:
      "A gaming desktop assembled for a friend around the RTX 3070 Founders Edition, with careful component installation, airflow planning, and system setup.",
    ownership: "Friend build",
    tags: ["PC Assembly", "Airflow", "Component Installation", "System Setup"],
    goals: [
      "Deliver strong gaming performance with the RTX 3070.",
      "Maintain dependable airflow around the CPU and graphics card.",
      "Complete a clean, reliable assembly for everyday use.",
    ],
    images: [
      {
        src: "/friend-rtx3070-build.webp",
        alt: "Friend's Intel Core i7 and RTX 3070 Founders Edition gaming desktop",
      },
    ],
  },
  {
    number: "03",
    slug: "mini-itx-friend-build",
    title: "Compact Mini-ITX Gaming Build",
    processor: "AMD Ryzen 5 3600",
    graphics: "AMD Radeon RX 6600 XT",
    memory: "16GB",
    description:
      "A space-efficient Mini-ITX system assembled for a friend, balancing gaming performance, cooling, and cable management inside a compact enclosure.",
    ownership: "Friend build",
    tags: ["Mini-ITX", "Small Form Factor", "Cable Management", "Cooling"],
    goals: [
      "Fit capable gaming hardware into a compact footprint.",
      "Preserve airflow despite tight component clearances.",
      "Route power and cooling cables cleanly in limited space.",
    ],
    images: [
      {
        src: "/mini-itx-cpu.webp",
        alt: "Mini-ITX build showing the Ryzen processor cooling and compact internal layout",
      },
      {
        src: "/mini-itx-gpu.webp",
        alt: "Mini-ITX build showing the Radeon RX 6600 XT installation",
      },
    ],
  },
];

export const pcBuildGallery = [
  {
    src: "/mini-itx-build-1.webp",
    alt: "Additional compact PC assembly with a white chassis",
  },
  {
    src: "/mini-itx-build-2.webp",
    alt: "Additional compact build showing its internal component layout",
  },
  {
    src: "/ritesh-pc.webp",
    alt: "Ritesh's PC during assembly",
  },
  {
    src: "/extra-build-3.webp",
    alt: "RGB desktop with liquid cooling and a vertically mounted graphics card",
  },
];

export const skills = [
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
  "RTL Verification",
  "Digital Logic Design",
  "Finite State Machines",
  "UART",
  "FIFO Design",
  "ASIC Physical Design",
  "Cadence Innovus",
  "PC Assembly & Troubleshooting",
];
