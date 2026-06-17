export default function Education() {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-32"
    >

      <div className="mb-16">

        <p className="text-gray-400 uppercase tracking-widest mb-3">
          Academics
        </p>

        <h2 className="text-5xl font-bold">
          Education
        </h2>

      </div>

      <div className="grid gap-8">

        {/* University of Saskatchewan */}
        <div className="border border-white/10 rounded-3xl p-8 bg-stone-900/50">

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <p className="text-gray-500 mb-2">
                2022 — 2026
              </p>

              <h3 className="text-3xl font-bold">
                Bachelor of Science in Engineering - Computer Engineering
              </h3>

              <p className="text-gray-500 mt-2">
                University of Saskatchewan, Saskatoon, SK
              </p>
            </div>
            
            {/* Honors/Stats Badge */}
            <div className="text-left md:text-right mt-2 md:mt-0 text-sm text-gray-400">
              <p className="font-semibold text-white">Program Avg: 80% (3.2 GPA)</p>
              <p className="text-xs text-gray-500 mt-1">Graduated: April 2026</p>
            </div>
          </div>

          <ul className="mt-8 space-y-4 text-gray-400">

            <li className="flex gap-3">
              <span className="text-white/40 mt-1">•</span>
              <span>
                <strong className="text-white">Dean’s Honor Roll:</strong> Awarded in 1st, 2nd, 3rd and 4th Year.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-white/40 mt-1">•</span>
              <div>
                <strong className="text-white block mb-2">Areas of Focus:</strong>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Logic Design / FPGA Synthesis</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Digital & Embedded Systems</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Digital System Verification & Testing</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Digital Systems Architecture</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Software Engineering</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Digital Analog Converters</span>
                </div>
              </div>
            </li>

          </ul>

        </div>

      </div>

    </section>
  )
}
