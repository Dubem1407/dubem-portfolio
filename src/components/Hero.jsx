export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">

        <div>
          <p className="uppercase tracking-widest text-gray-400 mb-4 text-sm">
            Computer Engineering · Embedded Systems
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-mono">
            Hi, I'm Chidubem<br />
            'Dubem' <br />
            Emeka-Nwuba
          </h1>

          <p className="mt-6 text-gray-400 text-base max-w-xl leading-relaxed">
            I build embedded systems, real-time software,
            and engineering solutions integrating hardware
            and software into practical applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="mailto:dubem1407@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/chidubem-emeka-nwuba/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>

            <a
            href="/Chidubem_Emeka-Nwuba_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Resume
          </a>

          </div>
        </div>

        <div className="flex justify-center w-full">
          <img 
            src="src\assets\potrait_2025.jpg"
            alt="Your Profile" 
            className="w-full max-w-md aspect-square rounded-full object-cover border border-white/10"
          />
        </div>

      </div>
    </section>
  )
}
