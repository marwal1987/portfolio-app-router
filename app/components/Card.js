export default function Card({ title, description, usedTech, url, imgUrl }) {
  return (
    <article
      id="card"
      className="bg-gray-900 flex flex-row items-center gap-12 p-12 w-[100%] m-h-96 shadow shadow-white rounded-lg"
    >
      <img
        src={imgUrl}
        alt="Project-preview-image"
        className="text-gray-300 "
        width="300px"
      />

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-300">{description}</p>
        <hr />
        <p className="mt-4 text-lg text-gray-300">
          Tech Stack:
          <br />
          {usedTech}
        </p>
        <a href={url} className="mt-4 text-lg text-gray-300">
          Link to project
        </a>
      </div>
    </article>
  );
}
