export default function Card({ title, description, usedTech, url }) {
  return (

    <section className="card container md:h-60 flex md:flex-row flex-col gap-12 md:pr-12 cursor-pointer md:rounded-r-full outline-double outline-2">
        <div
          id="vertical-pillar"
          aria-hidden={true}
          className="md:w-[10px] md:h-[100%] h-[10px] w-[inherit] md:bg-gradient-to-l bg-gradient-to-b from-slate-950 to-slate-950 via-slate-600 "
        ></div>
      <article className="container flex md:flex-row flex-col items-center gap-12">

        <div className="md:p-0 px-12">
          <h2 className="drop-shadow-2xl text-4xl text-center md:text-start font-bold text-amber-950">
            {title}
          </h2>
          <p className="drop-shadow-2xl text-xl text-center md:text-start text-amber-950/80 ">
            <i>{description}</i>
          </p>
          <br />

          <p className="drop-shadow-2xl text-center md:text-start text-2xl text-amber-950 font-bold">Tech Stack:</p>
          <p className="drop-shadow-2xl text-center md:text-start text-xl text-amber-950/80">{usedTech}</p>
        </div>

        <a className="md:p-0 pb-12 text-center " aria-label={`Link to ${title} githubpage`} href={url} target="_blank" >
          <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="#24292f"
            />
          </svg>
                  <div
          className="text-3xl font-bold text-[#24292f] drop-shadow-xl"
        >
          GitHub
        </div>
        </a>
      </article>
    </section>
  );
}
