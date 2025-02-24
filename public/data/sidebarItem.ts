import { type SidebarItemTypes } from "@/types/SidbarItemTypes";

export const sidebarItems: SidebarItemTypes[] = [
  {
    id: "trending_movies",
    title: "Trending Movies",
    icon: "mdi:movie",
    comingSoon: false,
    href: "/",
  },
  {
    id: "tv_shows",
    title: "Tv Shows",
    icon: "mdi:television",
    comingSoon: true,
    href: "#",
  },
  {
    id: "settings",
    title: "Settings",
    icon: "mdi:cog-outline",
    comingSoon: true,
    href: "#",
  },
  {
    id: "help",
    title: "Help",
    icon: "mdi:help-circle-outline",
    comingSoon: true,
    href: "#",
  },
];
