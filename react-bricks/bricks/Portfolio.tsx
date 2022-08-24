import React from "react";
import { types, Repeater } from "react-bricks/frontend";
import Container from "../../components/Container";

const Portfolio: types.Brick = () => {
  return (
    <Container id="portfolio">
      <div className="w-full space-y-10">
        <h1 className="text-base font-bold text-6xl">my portfolio</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Repeater propName="projects" />
        </div>
      </div>
    </Container>
  );
};

Portfolio.schema = {
  name: "portfolio",
  label: "Portfolio",
  repeaterItems: [
    {
      name: "projects",
      itemType: "project",
      itemLabel: "Project",
    },
  ],
};

export default Portfolio;
