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
      className=" flex flex-col gap-12 items-center"
    >
      <div className="container flex flex-col items-center justify-center max-w-[600px] gap-12">
        <h1 className=" text-6xl md:text-7xl tracking-wide uppercase font-bold text-center drop-shadow-[0_0_10px_rgba(252,211,77,0.4)]">
     <span className="golden-text">
            Versatile FrontEnd Developer and Linux Enthusiast with a Melodic
            Twist
            </span>
        </h1>
        <p className="text-2xl text-stone-400 text-center tracking-wide w-3/4">
          Meet Martin, a multifaceted talent bridging the worlds of Front-End
          development and Linux expertise with a harmonious touch. With a
          journey that spans from mastering HTML, CSS, and React to delving into
          the intricacies of Linux systems and virtualization technologies,
          Martin brings a unique blend of technical prowess and creativity to
          the table. From crafting captivating user interfaces to orchestrating
          seamless DevOps workflows.
        </p>

        <button
          aria-label="To projects section"
          onClick={() => scrollToSection("#projects")}
          className="px-4 py-2 animate-pulse hover:animate-none text-3xl font-bold text-amber-500 hover:text-amber-300 rounded-full border-amber-500 shadow-[0_0px_10px_rgba(252,211,77,0.6)]"
        >
          &darr;
        </button>
      </div>
      {/* <div className="flex items-center justify-center">
        <Image
          priority={true}
          src="/images/man-on-the-moon.jpg"
          height={400}
          width={440}
          alt="Picture of Martin"
          className="drop-shadow-[0_35px_35px_rgba(0,150,60,0.25)] rounded-b-full text-stone-300 "
        />
      </div> */}
    </section>
  );
}
