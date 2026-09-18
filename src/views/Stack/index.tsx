"use client";

import Title from "@/components/Title";
import Flower from "@/icons/Flower";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export type StackCategory = "frontend" | "backend" | "database" | "tools";

export interface StackItem {
  readonly stackName: string;
  readonly imageSrc: string;
}

export const STACK_DATA: Record<StackCategory, readonly StackItem[]> = {
  frontend: [
    { stackName: "JavaScript", imageSrc: "/stack/js.png" },
    { stackName: "TypeScript", imageSrc: "/stack/ts.png" },
    { stackName: "HTML5", imageSrc: "/stack/html5.svg" },
    { stackName: "CSS3", imageSrc: "/stack/css3.svg" },
    { stackName: "React", imageSrc: "/stack/react.png" },
    { stackName: "Next.Js", imageSrc: "/stack/next.webp" },
    { stackName: "Tailwind CSS", imageSrc: "/stack/tailwind.png" },
    { stackName: "Bootstrap", imageSrc: "/stack/bootstrap.png" },
    { stackName: "MUI", imageSrc: "/stack/materui.png" },
    { stackName: "Shadcn/UI", imageSrc: "/stack/shadcnui.svg" },
    { stackName: "Radix UI", imageSrc: "/stack/radixui.svg" },
    { stackName: "TanStack Query", imageSrc: "/stack/reactquery.svg" },
    { stackName: "React Hook Form", imageSrc: "/stack/reacthookform.svg" },
    { stackName: "Zod", imageSrc: "/stack/zod.svg" },
  ],
  backend: [
    { stackName: "Node.js", imageSrc: "/stack/node.png" },
    { stackName: "Express.js", imageSrc: "/stack/ex.png" },
    { stackName: "GraphQL", imageSrc: "/stack/graphql.svg" },
    { stackName: "Socket.IO", imageSrc: "/stack/socketio.svg" },
    { stackName: "JWT", imageSrc: "/stack/jwt.svg" },
  ],
  database: [
    { stackName: "MongoDB", imageSrc: "/stack/mongodb.png" },
    { stackName: "MySQL", imageSrc: "/stack/mySQL.png" },
    { stackName: "PostgreSQL", imageSrc: "/stack/postgreSQL.webp" },
  ],
  tools: [
    { stackName: "Git", imageSrc: "/stack/git.png" },
    { stackName: "Jira", imageSrc: "/stack/jira.png" },
    { stackName: "Figma", imageSrc: "/stack/figma.svg" },
    { stackName: "Directus", imageSrc: "/stack/directus.svg" },
    { stackName: "GA4", imageSrc: "/stack/ga4.svg" },
  ],
} as const;

export const STACK_CATEGORIES: readonly StackCategory[] = [
  "frontend",
  "backend",
  "database",
  "tools",
] as const;

export default function Stack() {
  const t = useTranslations("stack");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="stack"
      aria-label={t("title")}
      className="mt-20 flex flex-col px-4 sm:px-8 md:px-16 lg:ml-40"
    >
      <div className="mb-10">
        <Title title={t("title")} icon={<Flower className="h-8 w-8" />} />
        <p className="mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
          {t("description")}
        </p>
      </div>
      <div className="space-y-12">
        {STACK_CATEGORIES.map((role) => (
          <div key={role} className="grid gap-4 sm:grid-cols-12">
            {/* Role title */}
            <div className="sm:col-span-5">
              <span className="cursor-target text-3xl font-extrabold sm:text-4xl">
                {t(`categories.${role}`).toUpperCase()}
              </span>
            </div>

            {/* Grid items */}
            <div className="flex flex-wrap gap-x-11 gap-y-9 sm:col-span-7">
              {STACK_DATA[role].map((stack) => (
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.8 }}
                  key={stack.stackName}
                  className="flex cursor-default items-center gap-3.5"
                >
                  <Image
                    width={40}
                    height={40}
                    src={stack.imageSrc}
                    alt={stack.stackName}
                  />

                  <span className="text-xl sm:text-2xl">{stack.stackName}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
