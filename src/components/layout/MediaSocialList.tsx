'use client";';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function MediaSocialList() {
  return (
    <div className="absolute mt-64 flex flex-col gap-2 text-2xl">
      <LinkedInIcon
        sx={{
          fontSize: "40px",
          ":hover": {
            cursor: "pointer",
            color: "#004aad",
          },
        }}
      />
      <GitHubIcon
        sx={{
          fontSize: "40px",
          ":hover": {
            cursor: "pointer",
            color: "#004aad",
          },
        }}
      />
    </div>
  );
}
