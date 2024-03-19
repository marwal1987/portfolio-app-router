import Card from "./Card";

export default function ProjectsSection() {
  return (
    <section className="p-12 bg-gray-900 w-[100%] flex flex-col gap-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white ">
        My Projects
      </h2>

      <div className="container flex flex-col gap-12 justify-center items-start">
        <Card
          title="Project 1"
          description="Description 1"
          usedTech="HTML CSS React Tailwind"
          url="website"
          imgUrl="/../../public/images/man-on-the-moon.jpg"
        />
        <Card
          title="Project 2"
          description="Description 2"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
        <Card
          title="Project 3"
          description="Description 3"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />

      </div>
    </section>
  );
}