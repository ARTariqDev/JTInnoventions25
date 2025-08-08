function HeroBg() {
  return (
    <picture>
      <source
        srcSet="/heroImg/hero@500w.jpg 1x, /heroImg/hero@914w.jpg 2x"
        media="(max-width: 500px)"
      />
      <source
        srcSet="/heroImg/hero@914w.jpg 1x, /heroImg/hero@2000w.jpg 2x"
        media="(max-width: 914px)"
      />
      <source
        srcSet="/heroImg/hero@1313w.jpg 1x, /heroImg/hero@2000w.jpg 2x"
        media="(max-width: 1313px)"
      />
      <source
        srcSet="/heroImg/hero@1500w.jpg 1x, /heroImg/hero.jpg 2x"
        media="(max-width: 1500px)"
      />
      <source
        srcSet="/heroImg/hero@2000w.jpg 1x, /heroImg/hero.jpg 2x"
        media="(max-width: 2000px)"
      />
      <source srcSet="/heroImg/hero.jpg" media="(min-width: 2001px)" />
      <img
        src="/heroImg/hero.jpg"
        alt="Hero background"
        className="fixed inset-0 w-full h-full object-cover object-center z-[-2]"
      />
    </picture>
  );
}

export default HeroBg;
