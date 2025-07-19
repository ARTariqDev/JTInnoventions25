function Footer() {
  const items = [
    "Copyright © 2025 LGS JT",
    "⚬",
    "All rights Reserved",
    "⚬",
    <>
      Made By : <a href="https://github.com/ARTariqDev" target="_blank" rel="noopener noreferrer" className="relative text-cyan-400 hover:text-cyan-300 font-mono transition-all duration-300 hover:shadow-[0_0_8px_rgba(34,211,238,0.5)] hover:scale-105 border-b border-transparent hover:border-cyan-300 group">
        <span className="relative z-10">Abdur Rehman Tariq</span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
      </a> & <a href="https://github.com/fajj-developer14" target="_blank" rel="noopener noreferrer" className="relative text-cyan-400 hover:text-cyan-300 font-mono transition-all duration-300 hover:shadow-[0_0_8px_rgba(34,211,238,0.5)] hover:scale-105 border-b border-transparent hover:border-cyan-300 group">
        <span className="relative z-10">Syed Farjad Abbas</span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
      </a>
    </>,
    "⚬",
    "Graphics By Abdul Basit"
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-4 sm:py-6 px-2 border-t border-gray-800 relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.1)_25%,rgba(34,211,238,0.1)_50%,transparent_50%,transparent_75%,rgba(34,211,238,0.1)_75%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <ul className="relative text-slate-300 text-xs font-mono flex flex-col sm:flex-row justify-center items-center text-center space-y-1 sm:space-y-0">
        {items.map((item, i) => (
          <li
            key={i}
            className={`px-2 lg:px-3 py-1 transition-all duration-300 hover:text-cyan-400 ${
              i % 2 === 1 && "hidden sm:inline text-cyan-500/50"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

    </footer>
  );
}

export default Footer;