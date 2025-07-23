import categoryData from "../categoryData";
import Card from "../components/Card";

export function meta() {
  return [{ title: "Categories" }];
}

export default function Categories() {
  return (
    <section className="h-full pt-22 md:pt-26 lg:pt-28 px-15 md:px-20 pb-20 sm:pb-28">
      <h1
        className="font-monaspace text-4xl xs:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold text-slate-50 mb-12 md:mb-15 text-center"
        id="headerText"
      >
        CATEGORIES
      </h1>
      <div className="flex flex-wrap gap-10 md:gap-x-20 xl:gap-x-24 md:gap-y-16 justify-evenly max-w-[1600px] mx-auto cards">
        {categoryData.map((c) => (
          <Card
            key={crypto.randomUUID()}
            description={c.description}
            img={c.img}
            pdfLink={c.pdfLink}
          />
        ))}
      </div>
    </section>
  );
}
