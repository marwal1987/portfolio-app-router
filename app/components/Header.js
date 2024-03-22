export default function () {
  return (
    <>
      <header className="container py-3 bg-gradient-to-b from-slate-950 to-slate-950 via-slate-800">
        <nav>
          <menu className="flex items-center justify-center gap-12">
            <a href="">
              <span className="text-2xl hover:font-bold bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
                Home
              </span>
            </a>
            <a href="">
              <span className="text-2xl hover:font-bold bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
                Projects
              </span>
            </a>
            <a href="">
              <span className="text-2xl hover:font-bold bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
                BIO
              </span>
            </a>
          </menu>
        </nav>
      </header>
      <div className="w-[100%] h-[1px] bg-gradient-to-r from-amber-950 to-amber-950 via-amber-500"></div>
    </>
  );
}
