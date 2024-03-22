function ContactSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6">
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-amber-950 to-amber-950 via-amber-500"></div>
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
            Contact
          </span>
        </h2>

        <ul className="text-lg text-stone-400">
          <li>marwal1987@gmail.com</li>
          <li>LinkedIn</li>
          <li></li>
          </ul>
      </div>

      <p className="text-lg text-stone-400">&copy; 2024 Martin Wallberg</p>
    </section>
  );
}

export default ContactSection;
