export default function Navbar() {
  return (
    <div className="text-lg">
      <nav className="font-comfortaa flex justify-between bg-amber-700 px-32 py-5">
        <h1 className="font-bold">Duong Thi Cam Tu</h1>
        <ul className="flex flex-row gap-12">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>

      {/* <div className="-z-1">
        <HeroBackground />
      </div> */}
    </div>
  );
}
