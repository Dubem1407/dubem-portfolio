export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-32"
    >

      <div className="mb-16">

        <p className="text-gray-400 uppercase tracking-widest mb-3">
          Work
        </p>

        <h2 className="text-5xl font-bold">
          Experience
        </h2>

      </div>

      <div className="grid gap-8">

        {/* TAG AVL */}
        <div className="border border-white/10 rounded-3xl p-8 bg-zinc-900/50">

          <p className="text-gray-500 mb-2">
            2023 — Present
          </p>

          <h3 className="text-3xl font-bold">
            Audiovisual and Lighting Technician
          </h3>

          <p className="text-gray-500 mt-2">
            TAG AVL Productions
          </p>

          <ul className="mt-6 space-y-4 text-gray-400">

          <li className="flex gap-3">
            <span className="text-white/40 mt-1">•</span>
            <span>
              Supported 50+ live events annually, configuring and troubleshooting audio, video, and lighting systems.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-white/40 mt-1">•</span>
            <span>
              Collaborated with production teams during setup, operation, and teardown in fast-paced environments.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-white/40 mt-1">•</span>
            <span>
              Diagnosed hardware and signal-flow issues to maintain reliable event operations.
            </span>
          </li>

        </ul>

        </div>

        {/* Facilities Attendant */}
        <div className="border border-white/10 rounded-3xl p-8 bg-zinc-900/50">

          <p className="text-gray-500 mb-2">
            2024 — Present
          </p>

          <h3 className="text-3xl font-bold">
            Facilities Attendant
          </h3>

          <p className="text-gray-500 mt-2">
            College of Kinesiology, University of Saskatchewan
          </p>

          <ul className="mt-6 space-y-4 text-gray-400">

          <li className="flex gap-3">
            <span className="text-white/40 mt-1">•</span>
            <span>
              Coordinated facility and equipment setup for athletic and recreational events.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-white/40 mt-1">•</span>
            <span>
              Assisted patrons and supported daily operations in a high-traffic recreational facility.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-white/40 mt-1">•</span>
            <span>
              Performed water quality testing and ensured compliance with safety standards.
            </span>
          </li>

        </ul>

        </div>

      </div>

    </section>
  )
}