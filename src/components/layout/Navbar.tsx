"use client";

import EmailIcon from "@mui/icons-material/Email";
import LinkHover from "../LinkHover";
import ToggleButton from "../ToggleButton";
import LocaleSwitcher from "./LocaleSwitcher";
import Face2Icon from "@mui/icons-material/Face2";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslations } from "next-intl";
import { useSecret } from "@/context/SecretContext";

export default function Navbar() {
  const t = useTranslations("navbar");
  const { setClicked } = useSecret();

  return (
    <div className="text-2xl">
      <nav className="font-comfortaa flex items-center justify-between gap-2 sm:gap-4">
        {/* Secret logo trigger */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            type="button"
            className="focus-visible:ring-primary dark:focus-visible:ring-orange cursor-pointer rounded-md px-1 font-bold focus-visible:ring-2 focus-visible:outline-none"
            onClick={() => {
              setClicked(true);
            }}
          >
            Tus
          </button>
          <div className="hidden items-center sm:flex">
            <LinkHover
              content="cmtduong144@gmail.com"
              href="mailto:cmtduong144@gmail.com"
              icon={<EmailIcon className="mr-1" />}
            />
          </div>
        </div>

        {/* Center / Controls: Toggle theme + Locale Switcher */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="sm:hidden">
            <LinkHover
              content=""
              href="mailto:cmtduong144@gmail.com"
              icon={<EmailIcon />}
            />
          </div>
          <ToggleButton />
          <LocaleSwitcher />

          {/* Desktop Links */}
          <ul className="ml-2 hidden flex-row items-center gap-5 lg:flex">
            <li>
              <LinkHover
                content={t("resume")}
                href="https://drive.google.com/file/d/1WqSVbIhGevO2PhYIeFm6pQrlJgUv7Kp6/view?usp=sharing"
                icon={<Face2Icon className="mr-1" />}
                external
                ariaLabel={t("resumeAria")}
              />
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="cursor-pointer p-1 lg:hidden">
            <MenuIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                  color: "#004aad",
                },
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
