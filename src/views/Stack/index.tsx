import Title from "@/components/Title";
import Flower from "@/icons/Flower";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Stack() {
  const t = useTranslations("stack");
  const stackList = {
    fe: [
      {
        stackName: "JavaScript",
        imageSrc: "/stack/js.png",
      },
      {
        stackName: "TypeScript",
        imageSrc: "/stack/ts.png",
      },
      {
        stackName: "React",
        imageSrc: "/stack/react.png",
      },
      {
        stackName: "Next.Js",
        imageSrc: "/stack/next.webp",
      },
      {
        stackName: "Tailwind CSS",
        imageSrc: "/stack/tailwind.png",
      },
      {
        stackName: "Bootstrap",
        imageSrc: "/stack/bootstrap.png",
      },
      {
        stackName: "MUI",
        imageSrc: "/stack/materui.png",
      },
    ],
    be: [
      { stackName: "Node.js", imageSrc: "/stack/node.png" },
      { stackName: "Express.js", imageSrc: "/stack/ex.png" },
    ],
    db: [
      { stackName: "MongoDB", imageSrc: "/stack/mongodb.png" },
      { stackName: "MySQL", imageSrc: "/stack/mySQL.png" },
      { stackName: "PostgreSQL", imageSrc: "/stack/postgreSQL.webp" },
    ],
    tools: [
      { stackName: "Git", imageSrc: "/stack/git.png" },
      { stackName: "Jira", imageSrc: "/stack/jira.png" },
    ],
  };
  return (
    <section className="mt-20 ml-40 flex-col">
      <div className="mb-10">
        <Title title="MY STACK" icon={<Flower className="h-8 w-8" />} />
      </div>
      <div className="space-y-12">
        {Object.entries(stackList).map(([role, stacks]) => (
          <div key={role} className="grid sm:grid-cols-12">
            {/* Role title */}
            <div className="sm:col-span-5">
              <p className="text-4xl font-extrabold">{role.toUpperCase()}</p>
            </div>

            {/* Grid items */}
            <div className="flex flex-wrap gap-x-11 gap-y-9 sm:col-span-7">
              {stacks.map((stack) => (
                <div
                  key={stack.stackName}
                  className="flex items-center gap-3.5"
                >
                  <Image
                    width={40}
                    height={40}
                    src={stack.imageSrc}
                    alt={stack.stackName}
                  />
                  <span className="text-2xl">{stack.stackName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
