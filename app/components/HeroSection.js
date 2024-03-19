import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-12  flex flex-col lg:flex-row items-center justify-evenly gap-12">
      <div className="container flex flex-col items-center justify-center max-w-96 gap-12">
        <h1 className="text-4xl md:text-5xl tracking-wide uppercase font-bold text-white text-center">
          <span>
            Versatile Front-End Developer and Linux Enthusiast with a Melodic
            Twist
          </span>
        </h1>
        <p className="text-2xl text-white text-center tracking-wide ">
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
          height={555}
          width={555}
          alt="Picture of Martin"
          className="drop-shadow-[0_25px_25px_rgba(0,150,60,0.2)] rounded-b-full text-gray-300 "
        />
      </div>
    </section>
  );
}
