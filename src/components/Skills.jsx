export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-32"
    >

      <div className="mb-16">

        <p className="uppercase tracking-widest text-gray-400 mb-3">
          Toolchain
        </p>

        <h2 className="text-5xl font-bold">
          Skills
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Embedded & Firmware */}
        <div className="border border-white/10 rounded-3xl p-8 bg-zinc-900/50">

          <h3 className="text-2xl font-bold mb-5">
            Embedded & Firmware
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>Embedded C</li>
            <li>STM32 Development</li>
            <li>FreeRTOS / µC-OS-II</li>
            <li>SPI / I2C / UART</li>
            <li>Interrupt Systems</li>
            <li>Sensor Integration</li>
            <li>Real-Time Systems</li>
            <li>Hardware Debugging</li>

          </ul>

        </div>

        {/* FPGA & Digital Design */}
        <div className="border border-white/10 rounded-3xl p-8 bg-zinc-900/50">

          <h3 className="text-2xl font-bold mb-5">
            FPGA & Digital Design
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>SystemVerilog</li>
            <li>FPGA Design</li>
            <li>RTL Development</li>
            <li>FSM Design</li>
            <li>Computer Architecture</li>
            <li>Verification & Testbenches</li>
            <li>Timing Analysis</li>
            <li>Quartus / Questa / ModelSim</li>

          </ul>

        </div>

        {/* Software & Development */}
        <div className="border border-white/10 rounded-3xl p-8 bg-zinc-900/50">

          <h3 className="text-2xl font-bold mb-5">
            Software & Development
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>Python</li>
            <li>Java</li>
            <li>Django</li>
            <li>REST APIs</li>
            <li>SQL / MySQL</li>
            <li>Git & GitHub</li>
            <li>Linux</li>
            <li>Agile Development</li>

          </ul>

        </div>

        {/* Systems & Engineering */}
        <div className="border border-white/10 rounded-3xl p-8 bg-zinc-900/50">

          <h3 className="text-2xl font-bold mb-5">
            Systems & Engineering
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>System Architecture</li>
            <li>Signal Processing</li>
            <li>PCB-Level Debugging</li>
            <li>Hardware/Software Integration</li>
            <li>Testing & Validation</li>
            <li>Technical Troubleshooting</li>
            <li>Cross-Functional Collaboration</li>
            <li>AI-Assisted Development</li>

          </ul>

        </div>

      </div>

    </section>
  )
}