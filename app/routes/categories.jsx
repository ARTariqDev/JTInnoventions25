import categoryData from "../categoryData";
import Card from "../components/Card";

export function meta() {
  return [{ title: "Categories" }];
}

export default function Categories() {
  return (
    <section className="relative h-full pt-22 md:pt-26 lg:pt-28 px-8 md:px-20 pb-20 sm:pb-28">
      <div className="relative z-10">
        <h1
          className="font-monaspace text-4xl xs:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold text-slate-50 mb-12 md:mb-15 text-center"
          id="headerText"
        >
          CATEGORIES <br/>
        </h1>
        <h2 className="font-monaspace text-md xs:text-sm lg:text-xl xl:text-2xl tracking-wide  text-slate-50/30 mb-12 md:mb-15 text-center mt-[-2rem]" id="headerText">Study guides will be made available two weeks before the event</h2>

        <div className="flex flex-wrap gap-y-8 gap-x-6 md:gap-x-14 xl:gap-x-20 md:gap-y-16 lg:gap-y-20 justify-evenly max-w-[1600px] mx-auto cards">
          {categoryData.map((c) => (
            <Card
              key={c.pdfLink || c.title} // replaced UUID with this cause it didn't work in some older browsers (like my phones)
              description={c.description}
              img={c.img}
              pdfLink={"https://jtinnoventions.com/categories"} // changed from c.pdfLink to this until new study guides a re released
              compulsory={c.compulsory}
              gradient={c.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}