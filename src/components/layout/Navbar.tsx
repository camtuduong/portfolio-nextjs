"use client";

import EmailIcon from "@mui/icons-material/Email";
import LinkHover from "../LinkHover";
import ToggleButton from "../ToggleButton";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Face2Icon from "@mui/icons-material/Face2";
import BackpackIcon from "@mui/icons-material/Backpack";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslations } from "next-intl";
import { useSecret } from "@/context/SecretContext";

export default function Navbar() {
  const t = useTranslations("navbar");
  const { setClicked } = useSecret();
  return (
    <div className="text-2xl">
      <nav className="font-comfortaa flex items-center justify-between">
        <button
          className="mr-20"
          onClick={() => {
            setClicked(true);
          }}
        >
          Tus
        </button>
        <div className="flex w-full items-center gap-5">
          <LinkHover
            content="cmtduong144@gmail.com"
            href="mailto:cmtduong144@gmail.com"
            icon={<EmailIcon className="mr-1" />}
          />
          <ToggleButton />
        </div>
        {/* Desktop */}
        <ul className="hidden flex-row gap-5 lg:flex">
          <li>
            <LinkHover
              content={t("work")}
              href="work"
              icon={<InsertDriveFileIcon className="mr-1" />}
            />
          </li>
          <li>
            <LinkHover
              content={t("resume")}
              href="resume"
              icon={<Face2Icon className="mr-1" />}
            />
          </li>
          <li>
            <LinkHover
              content={t("shelf")}
              href="shelf"
              icon={<BackpackIcon className="mr-1" />}
            />
          </li>
        </ul>
        {/* Mobile */}
        <div className="cursor-pointer lg:hidden">
          <MenuIcon
            sx={{
              ":hover": {
                cursor: "pointer",
                color: "#004aad",
              },
            }}
          />
        </div>

        {/* Mobile Menu */}
      </nav>
    </div>
  );
}
