import { HouseFill, PersonFill, Laptop } from "react-bootstrap-icons";

export const BasicSidebarArgs = {
  open: false,
  onLogout: () => alert("Logging out"),
  languages: {
    current: { lang: "it" },
    others: [
      {
        lang: "en",
        onClick: (lang: string, route: string) => {
          alert(`Switching to ${lang} and going to ${route}`);
        },
      },
      {
        lang: "es",
        onClick: (lang: string, route: string) => {
          alert(`Switching to ${lang} and going to ${route}`);
        },
      },
    ],
  },
  items: [
    {
      url: "#",
      icon: <HouseFill />,
      active: true,
      text: "Dashboard",
    },
    {
      url: "#",
      icon: <PersonFill />,
      active: false,
      text: "Profilo",
      last: true,
    },
    {
      url: "#",
      icon: <Laptop />,
      active: false,
      text: "Dispositivi",
    },
  ],
};
