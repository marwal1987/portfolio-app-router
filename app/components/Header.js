"use client";

import { useEffect, useState } from "react";

export default function () {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div id="top" className="hidden" aria-hidden="true"></div>
      <header
        className={`container sticky top-0 z-50 py-3 ${
          !isScrolled
            ? "bg-gradient-to-b from-slate-950 to-slate-950 via-slate-900"
            : "transparent-header"
        }`}
      >
        <nav className="">
          <menu className="flex items-center justify-center gap-12">
            <button onClick={() => scrollToSection('#top')}>
              <span className="text-2xl hover:font-bold bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
                Home
              </span>
            </button>
            <button  onClick={() => scrollToSection('#projects')}>
              <span className="text-2xl hover:font-bold bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
                Projects
              </span>
            </button>
            <button onClick={() => scrollToSection('#contact')}>
              <span className="text-2xl hover:font-bold bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
                Contact
              </span>
            </button>
          </menu>
        </nav>
      </header>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-amber-950 to-amber-950 via-amber-500"></div>
    </>
  );
}
