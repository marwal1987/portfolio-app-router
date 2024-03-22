import Card from "./Card";

export default function ProjectsSection() {
  return (
    <section className="p-12 flex flex-col gap-12">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-400 ">
      <span className="bg-clip-text text-transparent bg-gradient-to-b  from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
      My Projects
  </span>
        
        
        <div
          id="underline"
          className="rounded-br-full w-[110px] h-[2px] bg-gradient-to-r  from-amber-900 to-amber-900 via-amber-400"
        ></div>
      </h2>

      <div className="container flex flex-col gap-12 justify-center items-start">
        <Card
          title="CHAS - News website"
          description='"Group project creating a news-site"'
          usedTech="HTML, CSS/Tailwind, Nextjs, Redux/Toolkit"
          url="website"
          imgUrl="/images/code.png"
        />
        <Card
          title="CHAS - Quiz web-app"
          description='"Group project creating a Quiz-web-app"'
          usedTech="HTML, CSS/Tailwind, Nextjs (Context-API)"
          url="website"
        />
        <Card
          title="Tic-Tac-Toe"
          description='"A simple tic-tac-toe app with a little twist..."'
          usedTech="HTML CSS/Tailwind React"
          url="website"
        />
        <Card
          title="Clock creation"
          description='"Worldtime clocks and a timers"'
          usedTech="HTML, CSS, React, Vite"
          url="https://github.com/marwal1987/react-clock.git"
        />
      </div>
    </section>
  );
}
