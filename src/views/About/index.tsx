import Button from "@/components/Button";
import React from "react";

export default function About() {
  return (
    <div>
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
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </div>
          <div className="flex text-lg gap-3 font-roboto">
            <Button>Projects</Button>
            <Button className="bg-white border">LinkedIn</Button>
            <Button>GitHub</Button>
          </div>
        </div>
      </div>
      {/* <ToggleButton /> */}
    </div>
  );
}
