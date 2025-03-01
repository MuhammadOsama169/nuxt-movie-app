import { type SidebarItemTypes } from "@/types/SidbarItemTypes";

export const sidebarItems: SidebarItemTypes[] = [
  {
    id: "trending_movies",
    title: "Trending Movies",
    icon: "material-symbols:movie-outline-rounded",
    comingSoon: false,
    href: "movie",
  },
  {
    id: "tv_shows",
    title: "Tv Shows",
    icon: "mdi:television",
    comingSoon: true,
    href: "#",
  },
  {
    id: "request",
    title: "Requests",
    icon: "material-symbols:add-comment-rounded",
    comingSoon: false,
    href: "requests",
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
    title: "Login/Register",
    icon: "hugeicons:user-square",
    comingSoon: false,
    href: "register",
  },
];
