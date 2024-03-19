export default function Card({ title, description, usedTech, url, imgUrl }) {
  return (
    <article
      className="bg-gradient-to-r from-emerald-950/70 via-emerald-800/70 to-teal-950/70 flex flex-col md:flex-row items-center gap-12  w-[100%] m-h-96 shadow shadow-white rounded-lg outline-double outline-4 "
    >
      <img
        src={imgUrl}
        alt="Project-preview-image"
        className="text-gray-300 md:rounded-br-full "
        width="300px"
      />

      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="mt-4 text-xl text-gray-300">{description}</p>
        <hr />
        <p className="mt-4 text-xl text-gray-300">
          Tech Stack:
          <br />
          {usedTech}
        </p>
        <a href={url} className="mt-4 text-xl text-gray-300">
          Link to project
        </a>
      </div>
    </article>
  );
}
