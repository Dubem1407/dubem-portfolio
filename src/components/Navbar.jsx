export default function Navbar() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#education" className="hover:text-white"> Education </a>
          <a href="#projects" className="hover:text-white"> Projects </a>
          <a href="#skills" className="hover:text-white"> Skills </a>
          <a href="#experience" className="hover:text-white"> Experience </a>
          <a href="#contact" className="hover:text-white"> Contact </a>
        </div>
      </nav>
    </header>
  )
}
