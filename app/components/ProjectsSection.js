import Card from "./Card";

export default function ProjectsSection() {
  return (
    <>
      <section id="projects" className=" flex flex-col gap-12 md:p-0 px-2">
        <h2 className="text-3xl font-bold text-amber-400 ">
          <span className="golden-text">My Projects</span>

          <div className="rounded-br-full w-[110px] h-[1px] bg-gradient-to-r  from-amber-950 to-amber-950 via-amber-400"></div>
        </h2>

        <div className="container flex flex-col gap-12 justify-center items-center">
          <Card
            title="CHAS - News website"
            description='"Group project creating a news site with news API"'
            usedTech="HTML, CSS/Tailwind, Nextjs, Redux/Toolkit"
            url="https://github.com/marwal1987/news-site"
          />
          <Card
            title="CHAS - Quiz web-app"
            description='"Group project creating a Quiz web-app"'
            usedTech="HTML, CSS/Tailwind, Nextjs (Context-API)"
            url="https://github.com/marwal1987/quiz-app"
          />
          <Card
            title="CHAS - Todo list"
            description='"Todo-list web-app"'
            usedTech="HTML, CSS, React, Vite"
            url="https://github.com/marwal1987/react-todo"
          />
          <Card
            title="CHAS - Clock Creation"
            description='"Worldtime clocks and a timers"'
            usedTech="HTML, CSS, React, Vite"
            url="https://github.com/marwal1987/react-clock"
          />
        </div>
      </section>
    </>
  );
}
