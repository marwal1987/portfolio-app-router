import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-12 flex flex-col gap-12 lg:flex-row items-center justify-between">
      <div className="container flex flex-col items-center justify-center max-w-[350px] gap-12">
        <h1 className="text-4xl md:text-[4rem] tracking-wide uppercase font-bold text-amber-400 text-center drop-shadow-[0_35px_35px_rgba(252,211,77,0.35)]">
          Versatile Front-End Developer and Linux Enthusiast with a Melodic
          Twist
        </h1>
        <p className="text-2xl text-stone-300 text-center tracking-wide ">
          Meet Martin, a multifaceted talent bridging the worlds of Front-End
          development and Linux expertise with a harmonious touch. With a
          journey that spans from mastering HTML, CSS, and React to delving into
          the intricacies of Linux systems and virtualization technologies,
          Martin brings a unique blend of technical prowess and creativity to
          the table. From crafting captivating user interfaces to orchestrating
          seamless DevOps workflows.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          priority={true}
          src="/images/man-on-the-moon.jpg"
          height={400}
          width={440}
          alt="Picture of Martin"
          className="drop-shadow-[0_35px_35px_rgba(0,150,60,0.25)] rounded-b-full text-stone-300 "
        />
      </div>
    </section>
  );
}
