import type { MetadataRoute } from "next";
import { lawyerProfile } from "@/content/lawyer";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${lawyerProfile.displayName} — ${lawyerProfile.firm.name}`,
    short_name: lawyerProfile.firm.name,
    description: lawyerProfile.entityLine,
    start_url: "/",
    display: "browser",
    background_color: "#f4efe6",
    theme_color: "#0b1626",
    lang: "en-IN",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
