function Tag({ text }) {
  return (
    <div className="bg-[#111] px-3 py-1 rounded-sm w-full">
      <p
        style={{
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
        className="bg-linear-65 from-purple-500 from-5% via-pink-500 to-orange-500 to-80% animate-gradientSlide font-bold tracking-wider animate-gradientSlide animate-pulse"
      >
        {text}
      </p>
    </div>
  );
}

export default Tag;
