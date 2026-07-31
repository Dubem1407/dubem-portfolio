import mobileToolAssistant from "../assets/mobile-tool-assistant.jpg"
import fpgaVisualizer from "../assets/fpga-visualizer.jpg"
import riscProcessor from "../assets/risc-processor_3.jpg"
import smallBizExpo from "../assets/small-biz-expo_3.jpg"
import gestureCar from "../assets/gesture-rc-car.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >

      <div className="mb-14">
        <p className="uppercase tracking-widest text-gray-500 mb-2 text-sm">
          Recent Builds
        </p>

        <h2 className="text-4xl font-bold">
          Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">

        {/* Gesture Controlled RC Car */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:border-white/20 transition">

          <div className="w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
            <img
              src={gestureCar}
              alt="Gesture Controlled RC Car"
              className="max-h-85 w-full object-cover"
            />
          </div>

          <div className="p-5">

            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Embedded Systems · Robotics
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Gesture Controlled RC Car
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Built a wireless RC car controlled through hand
              gestures using an MPU6500 IMU and HC-05 Bluetooth
              modules, with an Arduino Nano interpreting
              orientation data and an Arduino UNO controlling
              the motors through an L298N driver.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Arduino</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">MPU6500</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Bluetooth</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Embedded C</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Motor Control</span>
            </div>

            <div className="mt-6">
              <a
                href="https://github.com/Dubem1407/gesture-controlled-rc-car"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-xl text-sm text-white hover:bg-white/10 hover:border-white/30 transition"
              >
                View Project Repository →
              </a>
            </div>

          </div>

        </div>

        {/* Mobile Tool Assistant */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:border-white/20 transition">

          <div className="w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
            <img
              src={mobileToolAssistant}
              alt="Mobile Tool Assistant"
              className="max-h-85 w-full object-cover"
            />
          </div>

          <div className="p-5">

            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Embedded Systems · Robotics
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Mobile Tool Assistant
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Developed obstacle detection and embedded
              control logic for an autonomous robotic
              platform using STM32 and FreeRTOS,
              integrating sensor-driven navigation,
              UWB communication, and modular subsystem
              coordination for reliable real-time response.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">STM32</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">FreeRTOS</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">UWB</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">SPI/I2C</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Embedded C</span>
            </div>

          </div>

        </div>

        {/* FPGA Audio Visualizer */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:border-white/20 transition">

          <div className="w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
            <img
              src={fpgaVisualizer}
              alt="FPGA Audio Visualizer"
              className="max-h-80 w-full object-cover"
            />
          </div>
          <div className="p-5">

            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              FPGA · Digital Design
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              FPGA Audio Visualizer
            </h3>

            <div className="mb-4">
              <span className="px-2.5 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">
                Work In Progress
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Designing a real-time FPGA audio processing
              system using SystemVerilog to convert live
              audio input into visual frequency output,
              while debugging timing, synthesis, and
              waveform rendering constraints.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">FPGA</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">SystemVerilog</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Signal Processing</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">VGA</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Timing Analysis</span>
            </div>

          </div>

        </div>

        {/* RISC Processor */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:border-white/20 transition">

          <div className="w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
            <img
              src={riscProcessor}
              alt="RISC Processor"
              className="max-h-80 w-full object-cover"
            />
          </div>

          <div className="p-5">

            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Computer Architecture · Digital Systems
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              RISC-Style Microprocessor
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Designed a Harvard-architecture RISC
              processor with a custom instruction set,
              implementing datapath components,
              instruction decoding, execution logic,
              and verification testbenches for correct
              instruction sequencing and memory access.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Computer Architecture</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Datapath Design</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">SystemVerilog</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Verification</span>
            </div>

          </div>

        </div>

        {/* Small Biz Expo */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:border-white/20 transition">

          <div className="w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
            <img
              src={smallBizExpo}
              
              alt="Small Biz Expo App"
              className="max-h-80 w-full object-cover"
            />
          </div>

          <div className="p-5">

            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Full-Stack Development · Backend Systems
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Small Biz Expo Web App
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Developed backend functionality using
              Django and MySQL, designing database
              schemas, optimizing queries, integrating
              third-party APIs, and improving application
              responsiveness through structured testing
              and debugging workflows.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Django</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Python</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">MySQL</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">REST APIs</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs">Git</span>
            </div>

            <div className="mt-6">
              <a
                href="https://git.cs.usask.ca/rbj863/cmpt370-fake-engineers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-xl text-sm text-white hover:bg-white/10 hover:border-white/30 transition"
              >
                View Project Repository →
              </a>
            </div>

          </div>

        </div>

      </div>
      <div className="mt-12 text-center">
      <p className="text-gray-400 text-sm md:text-base">
        And much more in my{" "}
        <a
          href="/Chidubem_Emeka-Nwuba_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-4 hover:text-gray-300 transition"
        >
          resume
        </a>
        .
      </p>
    </div>

    </section>
  )
}