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
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div id="top" className="hidden" aria-hidden="true"></div>
      <header
        className={`container max-w-screen-lg flex flex-col place-content-center sticky top-0 z-50 ${
          !isScrolled
            ? "bg-gradient-to-b from-gray-950 to-gray-950 via-slate-900"
            : "transparent-header"
        }`}
      >
        <nav className="">
          <menu className="flex place-content-center gap-12 py-3">
            <button onClick={() => scrollToSection("#top")}>
              <span className="nav-btn">Home</span>
            </button>
            <button onClick={() => scrollToSection("#projects")}>
              <span className="nav-btn">Projects</span>
            </button>
            <button onClick={() => scrollToSection("#contact")}>
              <span className="nav-btn">Contact</span>
            </button>
          </menu>
        </nav>
        <div
          aria-hidden="true"
          className="w-[100%] h-[1px] bg-gradient-to-r from-amber-900 to-amber-900 via-amber-500"
        ></div>
      </header>
    </>
  );
}
