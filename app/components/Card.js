export default function Card({ title, description, usedTech, url, imgUrl }) {
  return (
    <article
      className="bg-gradient-to-r from-emerald-900 to-teal-950/70 flex flex-col md:flex-row items-center gap-12  w-[100%] m-h-96 shadow shadow-white rounded-lg outline-double outline-4 "
    >
      <img
        src={imgUrl}
        alt="Project-preview-image"
        className="text-gray-300 md:rounded-br-full "
        width="400px"
      />

      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-300 mb-4">
          {title}
        </h2>
        <p className="mt-4 text-xl text-stone-400">{description}</p>
        <hr className="mt-4 text-xl text-stone-400"/>
        <p className="mt-4 text-xl text-stone-400">
          Tech Stack:
          <br />
          {usedTech}
        </p>
        <a href={url} className="mt-4 text-xl text-stone-400">
          Link to project
        </a>
      </div>
    </article>
  );
}
