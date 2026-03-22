"use client";
import Button from "@/components/Button";
import Dash from "@/icons/Dash";
import HeroBackground from "@/icons/HeroBackground";

export default function HomeView() {
  return (
    <>
      <header className="text-lg relative">
        <div className="z-20 flex font-comfortaa justify-between px-32 py-5">
          <p className="font-bold">Duong Thi Cam Tu</p>
          <ul className="flex flex-row gap-12">
            <li>About</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="absolute -z-1 top-0 right-0 overflow-hidden">
          <HeroBackground />
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute pl-32 top-10 w-[750px] h-[500px] flex flex-col gap-2">
          <div className="text-primary text-xl font-bold font-nunito">
            FRONT-END DEVELOPER
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold leading-[120%] text-6xl font-playfair">
              Hello, my name is Duong Thi Cam Tu <br />
              you can call me Tus
            </h1>
            <div className="text-2xl leading-[150%] font-nunito text-secondary">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </div>
            <div className="flex text-lg gap-3 font-roboto">
              <Button>Projects</Button>
              <Button className="bg-white border">LinkedIn</Button>
              <Button>GitHub</Button>
            </div>
          </div>
        </div>
        {/* <ToggleButton /> */}
      </section>
      <section className="flex justify-center">
        {/* Hero Section */}
        <div className="flex flex-col gap-1 items-center">
          <h2 className="text-5xl font-bold leading-[72px] font-playfair">
            Projects
          </h2>
          <Dash />
        </div>
      </section>
    </>
  );
}
