export type ProjectSpec = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  hero: string;
  images: string[];
  tags: string[];
  overview: string[];
  capabilities: string[];
  specs?: ProjectSpec[];
};

export const projects: Project[] = [
  {
    slug: "industrial-product-electronics",
    eyebrow: "Industrial electronics",
    title: "Industrial Product Electronics",
    summary:
      "A field-ready electronics and enclosure package built to support a local oil distribution company's monitoring hardware, with Axion aiding in the development of production-grade hardware.",
    hero: "/images/real/tank-vision-enclosures.png",
    images: [
      "/images/real/pcb-render.png",
      "/images/projects-polished/tank-vision-layout-lab.png",
      "/images/real-projects/TAMV1.3.jpg",
    ],
    tags: ["Product electronics", "Industrial hardware", "Enclosure integration"],
    overview: [
      "A compact, network-connected electronics platform designed for long-term, unattended operation in an industrial field environment. The system pairs a compute and gateway board with a dedicated wireless radio interface board, giving the product both wired and wireless field connectivity from a single hardware package.",
      "We aided in the development of production-grade hardware for a local oil distribution company, contributing schematic capture and PCB layout, board bring-up and debug, connector and enclosure access planning, and the mechanical integration needed to get finished electronics into a field-ready housing.",
    ],
    capabilities: [
      "Impedance-controlled PCB routing for reliable high-speed and RF signal integrity",
      "IoT connectivity circuitry spanning wired Ethernet and wireless radio interfaces",
      "SDoC pre-compliance EMC/EMI testing to reduce risk before formal certification",
      "Custom enclosure bracket design and drilling for secure, field-ready electronics mounting",
      "Enclosure CAD design built around connector access, thermal clearance, and serviceability",
      "Contributed to hardware development from schematic capture through enclosure-integrated final assembly",
    ],
    specs: [
      { label: "Board configuration", value: "Two-board system: compute/gateway board + wireless radio interface board" },
      { label: "Connectivity", value: "Wired Ethernet and wireless radio" },
      { label: "Environment", value: "Continuous unattended field deployment" },
      { label: "Compliance approach", value: "SDoC pre-compliance EMC/EMI testing" },
    ],
  },
  {
    slug: "drone-prototype",
    eyebrow: "Prototype controls",
    title: "Custom Quadcopter and Flight Computer",
    summary:
      "A ground-up build combining a custom quadcopter airframe and flight-control system with an independently designed flight-computer PCB — both engineered and built in-house.",
    hero: "/images/projects-polished/drone-field-wide.png",
    images: [
      "/images/projects-polished/drone-field-close.png",
      "/images/real-projects/flight-computer-pcb-bench.png",
      "/images/projects-polished/drone-internal-hardware-slice.png",
    ],
    tags: ["Prototype", "Control systems", "Custom avionics"],
    overview: [
      "This project involved designing, building, and programming a custom quadcopter from the ground up — its own flight-control hardware, firmware, CAD-modeled frame, and telemetry interface, rather than a commercial flight-controller kit. A companion 2-axis PID stabilization rig helped work out the control approach before it went into the quadcopter.",
      "Alongside the airframe, we designed a custom 4-layer flight-computer PCB from the ground up: an STM32F407-based board integrating a 6-axis IMU, barometric and GPS sensing, 915 MHz LoRa telemetry, onboard data logging, and power management. The design was validated through independent power, sensor, and radio test modules before final integration.",
    ],
    capabilities: [
      "Custom embedded flight-controller hardware design",
      "Custom flight-control firmware and motor/ESC control",
      "IMU-based attitude sensing and sensor fusion",
      "Cascaded PID stabilization and control tuning",
      "Custom mechanical design and CAD-modeled airframe",
      "Custom 4-layer avionics PCB design around an STM32F407 MCU",
      "RF-aware layout for 915 MHz LoRa telemetry",
      "Power system design: LiPo charging, regulation, and low-EMI distribution",
      "Flight testing, telemetry visualization, and iterative tuning",
    ],
    specs: [
      { label: "Airframe", value: "Fully custom CAD-modeled frame, flight-control firmware, and telemetry interface (non-kit)" },
      { label: "Control approach", value: "Cascaded PID with real-time IMU feedback, validated on a dedicated 2-axis stabilization rig" },
      { label: "Flight computer MCU", value: "STM32F407VGT6, 100-pin LQFP" },
      { label: "Avionics board", value: "4-layer PCB, approximately 35 × 80 mm" },
      { label: "Telemetry", value: "915 MHz LoRa radio link" },
      { label: "Status", value: "Prototype" },
    ],
  },
  {
    slug: "ground-station",
    eyebrow: "Prototype systems",
    title: "Telemetry Ground Station",
    summary:
      "A prototype ground station that receives, decodes, and visualizes live telemetry over a custom 915 MHz LoRa radio link, giving real-time visibility into a remote system's position, sensor data, and status.",
    hero: "/images/projects-polished/ground-station-console.png",
    images: [
      "/images/projects-polished/ground-station-dashboard.png",
      "/images/real-projects/ground-station-cad.jpg",
      "/images/real-projects/groundstation.jpg",
    ],
    tags: ["Prototype", "RF telemetry", "Dashboard software"],
    overview: [
      "Built as a prototype telemetry system, the ground station receives, decodes, and visualizes live data from a remote system in real time — displaying position, velocity, sensor readings, and system status as they come in, rather than after the fact.",
      "The data path runs from onboard sensors through a custom 915 MHz LoRa radio link to a ground-based receiver, then through a Flask backend into a React dashboard. That path meant the work went well beyond building a GUI: it spanned RF communications, telemetry packet handling and decoding, communications reliability and error detection, backend and frontend development, GPS tracking, data logging, and real-time visualization.",
    ],
    capabilities: [
      "RF telemetry reception over a custom 915 MHz LoRa link",
      "Telemetry packet decoding with communications reliability and error detection",
      "Backend development for real-time data handling (Flask)",
      "Front-end dashboard development for live visualization (React)",
      "GPS position tracking and mapping",
      "Data logging for post-test analysis",
      "Real-time monitoring during field test operations",
    ],
    specs: [
      { label: "Link", value: "Custom 915 MHz LoRa telemetry" },
      { label: "Backend", value: "Flask" },
      { label: "Frontend", value: "React" },
      { label: "Data displayed", value: "Position, velocity, sensor readings, system status" },
      { label: "Use case", value: "Real-time field test monitoring" },
      { label: "Status", value: "Prototype" },
    ],
  },
  {
    slug: "ultrasonic-ir-targeting-system",
    eyebrow: "Sensor tracking",
    title: "Ultrasonic and IR Targeting System",
    summary:
      "A pan-tilt sensor turret with a fully 3D-modeled and 3D-printed frame, using an IR sensor and multiple ultrasonic sensors to detect and track the movement of individuals.",
    hero: "/images/projects-polished/ultrasonic-ir-targeting-turret.png",
    images: [
      "/images/projects-polished/ultrasonic-ir-targeting-turret.png",
    ],
    tags: ["Prototype", "Sensor fusion", "3D printed"],
    overview: [
      "The frame is fully 3D-modeled and 3D-printed, housing a two-axis pan-tilt mechanism built around a custom MCU-based control board. An IR sensor combined with multiple ultrasonic sensors gives the system overlapping proximity and motion data, which the onboard controller uses to detect and track the movement of individuals within its field of view.",
      "The control board follows the same custom-PCB approach used elsewhere at Axion: an MCU handling sensor polling, signal filtering, and pan-tilt actuation, with tracking logic converting raw ultrasonic and IR readings into a target heading the turret can follow in real time.",
    ],
    capabilities: [
      "Two-axis pan-tilt mechanical design",
      "Full 3D CAD modeling and 3D-printed frame fabrication",
      "IR sensor integration for proximity and motion sensing",
      "Multi-sensor ultrasonic array integration for spatial detection",
      "Custom MCU-based control board for sensor polling and actuation",
      "Real-time sensor fusion for target detection and tracking",
      "Servo/motor drive control for pan-tilt actuation",
    ],
    specs: [
      { label: "Frame", value: "Fully 3D-modeled and 3D-printed pan-tilt housing" },
      { label: "Sensing", value: "IR sensor + multiple ultrasonic sensors" },
      { label: "Control", value: "Custom MCU-based PCB controller" },
      { label: "Function", value: "Detects and tracks movement of individuals" },
      { label: "Status", value: "Prototype" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
