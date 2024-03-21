import Card from "./Card";

export default function ProjectsSection() {
  return (
    <section className="p-12 flex flex-col gap-12">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-400 ">
        My Projects
        <div
          id="underline"
          className="rounded-br-full w-[110px] h-[2px] bg-gradient-to-r from-amber-400 to-emerald-600"
        ></div>
      </h2>

      <div className="container flex flex-col gap-12 justify-center items-start">
        <Card
          title="Newspage"
          description="Description 2"
          usedTech="HTML CSS React Tailwind"
          url="website"
          imgUrl="/images/code.png"
        />
        <Card
          title="Quiz"
          description='"A simple tic-tac-toe app with a little twist..."'
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
        <Card
          title="Tic-Tac-Toe"
          description='"A simple tic-tac-toe app with a little twist..."'
          usedTech="HTML CSS React Tailwind"
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
