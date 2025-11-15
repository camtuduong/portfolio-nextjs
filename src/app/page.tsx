"use client";
import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <div className="max-w-3xl text-center space-y-10 ">
        <h1 className="text-6xl font-semibold">Hi, I am</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore non
          unde illo sit libero quidem amet alias explicabo, nihil quos fugit
          ratione atque earum, sed harum sequi? Doloremque, tempora totam!
        </p>
        <div className="space-x-2">
          <button>Button 1</button>
          <button className="bg-gray-200">Button 2</button>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}
