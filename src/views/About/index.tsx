import Button from "@/components/Button";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <div>
      <div className="flex h-[500px] w-[750px] flex-col gap-2 pl-32">
        <div className="flex flex-col gap-8">
          <h1 className="font-playfair text-6xl leading-[120%] font-bold">
            Hello, my name is Duong Thi Cam Tu <br />
            you can call me Tus
          </h1>
          <div className="font-nunito text-secondary text-2xl leading-[150%]">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </div>
          <div className="font-roboto flex gap-3 text-lg">
            <Button>Projects</Button>
            <Button className="border bg-white">LinkedIn</Button>
            <Button>GitHub</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
