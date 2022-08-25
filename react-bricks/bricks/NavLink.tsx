import React from "react";
import { types, Link } from "react-bricks";

interface NavLinkProps {
  text: string;
  href: string;
  section: "hero" | "navbar";
}

const NavLink: types.Brick<NavLinkProps> = ({
  text = "IG",
  href,
  section,
  ...rest
}) => {
  return (
    <Link {...rest} href={href}>
      <span
        className={`cursor-pointer text-base ${
          section === "hero"
            ? "flex justify-center items-center w-16 md:w-20 py-2 hover:bg-base hover:text-primary duration-100"
            : section === "navbar" &&
              "relative text-base font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-base before:transition hover:before:scale-100"
        }`}
      >
        {text}
      </span>
    </Link>
  );
};

NavLink.schema = {
  label: "Nav Link",
  name: "navLink",
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: "text",
      label: "Nav text",
      type: types.SideEditPropType.Text,
    },
    {
      name: "href",
      label: "Link (external or path)",
      type: types.SideEditPropType.Text,
    },
    {
      name: "section",
      label: "Section",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: "hero", label: "Hero" },
          { value: "navbar", label: "Navbar" },
        ],
      },
    },
  ],
};

export default NavLink;
