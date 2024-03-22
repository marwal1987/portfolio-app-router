export default function () {
  return (
    <>
    <header className="container py-4">
      <nav>
        <menu className="flex items-center justify-center gap-12">
          <a href="">
            <span className="bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
              Home
            </span>
          </a>
          <a href="">
            <span className="bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
              Projects
            </span>
          </a>
          <a href="">
            <span className="bg-clip-text text-stone-500 hover:text-transparent hover:bg-gradient-to-b from-amber-900 to-amber-900 via-amber-400 rounded-l-xl">
              Gallery
            </span>
          </a>
        </menu>
      </nav>

      <div
        id="underline"
        className="w-[100%] h-[1px] bg-gradient-to-r from-amber-900 to-amber-900 via-amber-400"
      ></div>
    </header>
      </>
  );
}
