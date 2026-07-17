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
  github: string;
  highlights: string[];
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
  storage: string;
  motherboard: string;
  description: string;
  tags: string[];
  goals: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "fpga-uart-dsp-platform",
    category: "FPGA COMMUNICATION",
    title: "FPGA UART Communication & DSP Platform",
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
    github: "https://github.com/harishvjk27",
    highlights: [
      "Implemented UART receive and transmit modules in SystemVerilog.",
      "Integrated an 8-byte FIFO for buffered serial communication.",
      "Created command parsing and multi-character response control logic.",
      "Verified module behavior with ModelSim simulations and waveform analysis.",
      "Validated serial communication using physical FPGA hardware and a CP2102 interface.",
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
    github: "https://github.com/harishvjk27",
    highlights: [
      "Designed an 8-bit arithmetic logic unit supporting core processor operations.",
      "Implemented a four-register storage architecture.",
      "Created instruction decode and processor control logic.",
      "Developed a multi-stage FSM for instruction execution.",
      "Simulated processor behavior and validated the integrated design on FPGA hardware.",
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
    github: "https://github.com/harishvjk27",
    highlights: [
      "Implemented a 64-bit arithmetic controller in SystemVerilog.",
      "Developed testbench logic for functional verification.",
      "Analyzed simulation behavior using Xcelium and SimVision.",
      "Explored synthesis and physical implementation using Cadence Innovus.",
      "Validated arithmetic and SRAM-related behavior through simulation.",
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
    href: null,
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
    href: null,
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
    title: "Gaming and Engineering Workstation",
    processor: "AMD Ryzen 7 7700X",
    graphics: "NVIDIA GeForce RTX 3060",
    memory: "Add memory details",
    storage: "Add storage details",
    motherboard: "Add motherboard details",
    description:
      "A custom desktop assembled for gaming, FPGA development, RTL simulation, programming, and engineering coursework, with an emphasis on component compatibility, cooling, and troubleshooting.",
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
];