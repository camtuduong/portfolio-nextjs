'use client";';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MediaSocialList() {
  return (
    <div className="absolute mt-64 flex flex-col gap-2 text-2xl">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link href="https://www.linkedin.com/in/cam-tu-duong" target="_blank">
          <LinkedInIcon
            sx={{
              fontSize: "40px",
              ":hover": {
                cursor: "pointer",
                color: "#004aad",
              },
            }}
          />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link href="https://github.com/camtuduong" target="_blank">
          <GitHubIcon
            sx={{
              fontSize: "40px",
              ":hover": {
                cursor: "pointer",
                color: "#004aad",
              },
            }}
          />
        </Link>
      </motion.div>
    </div>
  );
}
