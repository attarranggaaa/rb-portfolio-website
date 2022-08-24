import { types } from "react-bricks/frontend";
import About from "./About";
import Skill from "./Skill";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import NavLink from "./NavLink";
import Portfolio from "./Portfolio";
import Project from "./Project";

const bricks: types.Brick[] = [
  Navbar,
  Hero,
  About,
  Portfolio,
  Contact,
  Project,
  NavLink,
  Skill
];

export default bricks;
