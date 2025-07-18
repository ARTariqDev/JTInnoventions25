function Footer() {
  const items = [
    "Copyright © 2025 LGS JT",
    "⚬",
    "All rights Reserved",
    "⚬",
    "Made By : Abdur Rehman Tariq & Syed Farjad Abbas",
  ];
  return (
    <footer className="w-full bg-black py-2 sm:py-3 px-2">
      <ul className="text-slate-300 text-xs flex flex-col sm:flex-row justify-center items-center text-center">
        {items.map((item, i) => (
          <li
            key={i}
            className={`px-1 lg:px-1.5 py-0.5 ${
              i % 2 === 1 && "hidden sm:inline"
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
