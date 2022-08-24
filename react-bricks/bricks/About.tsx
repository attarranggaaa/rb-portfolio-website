import React from "react";
import Container from "../../components/Container";
import { types, Text, Repeater } from "react-bricks/frontend";

const About: types.Brick = () => {
  return (
    <Container id="about">
      <div>
        <div className="text-base w-full grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="space-y-5">
            <h1 className="md:text-6xl text-6xl font-bold text-left">
              about me
            </h1>
            <Text
              propName="description"
              renderBlock={({ children }) => (
                <h3 className="md:text-xl text-sm text-justify">{children}</h3>
              )}
              placeholder="Type a text"
              multiline
            />
          </div>
          <div className="space-y-5">
            <h1 className="md:text-6xl text-6xl font-bold">skills</h1>
            <div className="flex h-fit flex-wrap max-w-full">
              <Repeater propName="skills" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

About.schema = {
  name: "about",
  label: "About",
  sideEditProps: [],
  repeaterItems: [
    {
      name: "skills",
      itemType: "skill",
      itemLabel: "Skill",
    },
  ],
};

export default About;
