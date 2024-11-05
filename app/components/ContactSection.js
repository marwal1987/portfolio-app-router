function ContactSection() {
  return (
    <footer className="container max-w-screen-lg flex flex-col place-items-center gap-3 mb-3">
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="golden-text">Contact</span>
      </h2>
      <div
        aria-hidden="true"
        className="w-[100%] h-[1px] bg-gradient-to-r from-amber-950 to-amber-950 via-amber-500"
      ></div>

      <ul className="w-fit px-12 text-lg text-stone-400 text-center md:flex justify-between items-center gap-24">
        <li>marwal1987@gmail.com</li>
        <li className="bg-clip-text hover:text-transparent hover:bg-gradient-to-b from-amber-800 to-amber-800 via-amber-500">
          <a href="https://www.linkedin.com/in/martin-wallberg-049a62308/">
            LinkedIn
          </a>
        </li>
        <li>&copy; 2024 Martin Wallberg</li>
      </ul>
    </footer>
  );
}

export default ContactSection;
