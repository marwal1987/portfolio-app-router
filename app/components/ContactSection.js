function ContactSection() {
  return (
    <section className="container flex flex-col gap-6">
      <div
          id="underline"
          className="h-[1px] bg-gradient-to-r from-amber-900 to-amber-900 via-amber-400"
        ></div>
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
          Contact
  </span>
        </h2>
      
        <p className="text-lg text-gray-300">Contact me at info@email.com</p>
        
      </div>
    </section>
  );
}

export default ContactSection;
