import Tag from "./Tag";

function Card({ img, pdfLink, description, compulsory, gradient = "from-blue-600/20 via-cyan-500/20 to-blue-600/20" }) {
  return (
    <article className="card relative max-w-40 sm:max-w-50 md:max-w-60 xl:max-w-65 2xl:max-w-75 hover:scale-105 transition-transform delay-100 ease-out group hover:z-20 hover:drop-shadow-xl hover:drop-shadow-cyan-900">
      <div className={`absolute -inset-3 rounded-xl bg-gradient-to-r ${gradient} blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse`}></div>
      {compulsory && (
        <div className="absolute top-0 right-0 z-10">
          <Tag text={"Compulsory"} />
        </div>
      )}
      <div className={`inline-flex flex-col justify-center items-center relative overflow-hidden rounded-xl border-1 sm:group-hover:rounded-b-none bg-gradient-to-br ${gradient.replace('/20', '/80')}`}>
        <a
          className="w-full inline-block bg-black/20 hover:bg-black/10 active:bg-black/30 transition-all delay-100 ease-in-out"
          target="_blank"
          href={pdfLink}
        >
          <img src={img} alt="" />
        </a>
      </div>
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 translate-y-[80%] group-hover:translate-y-[95%] opacity-0 group-hover:opacity-100 pointer-events-none transition-all delay-100 ease-in-out rounded-b-lg ">
        <div className="bg-primary text-slate-300 w-full py-5 px-2 text-center">
          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;