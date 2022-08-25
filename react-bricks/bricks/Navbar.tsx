import { types, Repeater } from "react-bricks";
import Link from "next/link";
import Image from "next/image";

const Navbar: types.Brick = () => {
  return (
    <nav className="w-full h-20 md:h-28 bg-primary">
      <div className="lg:px-28 items-center md:px-14 px-6 h-full flex justify-between">
        <Link href="/">
          <div className="w-12  flex items-center cursor-pointer">
            <Image width={1500} height={700} src="/logo.svg" alt="logo" />
          </div>
        </Link>
        <Repeater
          propName="navLinks"
          renderWrapper={(items) => (
            <div className="flex space-x-4 md:space-x-12 font-medium md:text-lg text-md text-base">
              {items}
            </div>
          )}
        />
      </div>
    </nav>
  );
};

Navbar.schema = {
  name: "navbar",
  label: "Navbar",
  sideEditProps: [],
  repeaterItems: [
    {
      name: "navLinks",
      itemType: "navLink",
      itemLabel: "Nav Link",
    },
  ],
};

export default Navbar;
