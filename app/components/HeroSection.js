import Image from "next/image";

export default function HeroSection() {

  return (
    <section className="py-12 bg-gray-800 flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="container flex flex-col items-center justify-center max-w-96 gap-12">
        <h1
          className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-[0_35px_35px_rgba(70,90,0,0.15)]"
        >
          <span>Versatile Front-End Developer and Linux Enthusiast with a Melodic
          Twist</span>
        </h1>
        <p
          className="text-xl text-white text-center  "
        >
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
        
          src="/images/man-on-the-moon.jpg"
          height={500}
          width={500}
          alt="alt text?"
          className="drop-shadow-[0_35px_35px_rgba(70,90,0,0.15)] rounded-b-full text-gray-300 "
        />
      </div>
    </section>
  );
}