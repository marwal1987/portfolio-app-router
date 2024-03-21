export default function Card({ title, description, usedTech, url }) {
  return (
    <article className="container bg-gradient-to-r to-emerald-700 from-emerald-950/30 flex flex-col justify-between md:flex-row items-center gap-12 w-[800px] shadow shadow-white rounded outline-double outline-4">
      <div className="pl-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
          {title}
        </h2>
        <p className="mt-4 text-xl text-stone-300">{description}</p>
        <hr className="mt-4" />
        <p className="mt-4 text-xl text-stone-100 font-bold">Tech Stack:</p>
        <p className=" text-lg text-stone-300">{usedTech}</p>
        <br />
        <a
          href={url}
          className="mt-4 text-xl text-stone-300 hover:text-emerald-300 hover:bg-stone-900"
        >
          Link to project
        </a>
      </div>
      <div
        id="filler"
        className="rounded-bl-full w-[350px] h-[250px] bg-gradient-to-r from-emerald-300 to-emerald-900"
      ></div>
    </article>
  );
}

// Idea to use as seperator
{
  /* <div
id="filler"
className="rounded-br-full w-[200px] h-[2px] bg-gradient-to-r from-emerald-300 to-emerald-900"
></div> */
}
