"use client";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className=" flex flex-col gap-12 items-center md:p-0 px-2"
    >
      <div className="container flex flex-col items-center justify-center max-w-[450px] gap-12">
        <h1 className=" text-6xl md:text-7xl tracking-wide uppercase font-bold text-center drop-shadow-[0_0px_20px_rgba(252,211,77,0.4)]">
          <span className="golden-text">
            Curious FrontEnd Developer and Linux Enthusiast
          </span>
        </h1>
        <p className="text-2xl text-stone-400 text-center  max-w-[350px] ">
          <span className="text-4xl">M</span>eet Martin, a developer who enjoys
          exploring the intersections of Front-End development and Linux
          systems. With a background that includes hands-on experience with
          HTML, CSS, React, NextJS and virtualization and DevOps tools, Martin
          embraces learning and experimenting as core parts of his journey.
          Balancing technical challenges with creativity, he finds fulfillment
          in building projects that reflect both curiosity and thoughtful
          design.
        </p>

        <button
          aria-label="To projects section"
          onClick={() => scrollToSection("#projects")}
          className="px-4 py-2 animate-pulse hover:animate-none text-3xl font-bold text-amber-500 hover:text-amber-300 rounded-full border-amber-500 shadow-[0_0px_5px_rgba(252,211,77,0.6)]"
        >
          &darr;
        </button>
      </div>
    </section>
  );
}
// If I want to add an image in the hero section
// <div className="flex items-center justify-center">
//   <Image
//     priority={true}
//     src="/images/man-on-the-moon.jpg"
//     height={400}
//     width={440}
//     alt="Picture of Martin"
//     className="drop-shadow-[0_35px_35px_rgba(0,150,60,0.25)] rounded-b-full text-stone-300 "
//   />
// </div>
