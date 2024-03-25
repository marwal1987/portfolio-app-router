function ContactSection() {
  return (
    <footer
      id="contact"
      className="container max-w-screen-lg flex flex-col place-items-center gap-3 mb-3"
    >
      <div
        aria-hidden="true"
        className="w-[100%] h-[1px] bg-gradient-to-r from-amber-950 to-amber-950 via-amber-500"
      ></div>
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="golden-text">Contact</span>
      </h2>

      <ul className="text-xl text-stone-400">
        <li>marwal1987@gmail.com</li>
        {/* <li></li>
          <li></li> */}
      </ul>

      <p className="text-xl text-stone-400">&copy; 2024 Martin Wallberg</p>
    </footer>
  );
}

export default ContactSection;
