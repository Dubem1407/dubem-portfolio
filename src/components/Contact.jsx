export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >

      <div className="border border-white/10 rounded-3xl p-12 bg-zinc-900/50">

        <p className="uppercase tracking-widest text-gray-400 mb-3">
          Let's Connect
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Open to engineering opportunities
        </h2>

        <div>
        <p className="text-gray-400 mb-4 max-w-2xl">
            Interested in embedded systems, robotics, automation, and software engineering roles.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Always willing to relocate
        </div>
        </div>

        <div className="flex flex-col gap-4 text-lg">

          <a 
            href="mailto:dubem1407@gmail.com"
            className="hover:text-gray-300 transition"
          >
            Email - dubem1407@gmail.com
          </a>

          <a 
            href="https://www.linkedin.com/in/chidubem-emeka-nwuba/"
            className="hover:text-gray-300 transition"
            >
            LinkedIn - /chidubem-emeka-nwuba
          </a>

        </div>

      </div>

    </section>
  )
}