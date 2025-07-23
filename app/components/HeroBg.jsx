function HeroBg() {
  return (
    <picture>
      <source
        srcSet="app/assets/heroImg/hero@500w.jpg"
        media="(max-width: 500px)"
      />
      <source
        srcSet="app/assets/heroImg/hero@914w.jpg"
        media="(max-width: 914px)"
      />
      <source
        srcSet="app/assets/heroImg/hero@1313w.jpg"
        media="(max-width: 1313px)"
      />
      <source
        srcSet="app/assets/heroImg/hero@1500w.jpg"
        media="(max-width: 1500px)"
      />
      <source
        srcSet="app/assets/heroImg/hero@2000w.jpg"
        media="(max-width: 2000px)"
      />
      <source
        srcSet="app/assets/heroImg/hero.jpg"
        media="(min-width: 2001px)"
      />
      <img
        src="app/assets/heroImg/hero.jpg"
        alt="Hero background"
        className="fixed inset-0 w-full h-full object-cover object-center z-[-2]"
      />
    </picture>
  );
}

export default HeroBg;
