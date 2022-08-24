import React from "react";
import { types, Text, Repeater } from "react-bricks";
import Container from "../../components/Container";

interface HeroProps {
  collapse: true;
}

const Hero: types.Brick<HeroProps> = ({ collapse }) => {
  return (
    <Container>
      <div
        className={`md:space-y-6 space-y-4 w-full ${
          collapse && "-mt-40 md:-mt-56"
        } h-full`}
      >
        <div>
          <Text
            propName="as"
            renderBlock={({ children }) => (
              <h1 className="md:text-6xl text-4xl font-bold text-base">
                {children}
              </h1>
            )}
            placeholder="Type a text"
          />
        </div>
        <div>
          <Text
            propName="introduction"
            renderBlock={({ children }) => (
              <p className="md:text-xl text-lg leading-normal font-base text-base">
                {children}
              </p>
            )}
            placeholder="Type a text"
            multiline
          />
        </div>
        
          <Repeater
            propName="navLinks"
            renderWrapper={(items) => (
              <div className="flex rounded-lg font-medium md:text-lg text-md text-base border-2 border-base w-fit">
                {items}
              </div>
            )}
          />
        
      </div>
    </Container>
  );
};

Hero.schema = {
  name: "hero",
  label: "Hero",
  sideEditProps: [
    {
      name: "collapse",
      label: "Collapse with navbar",
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: "navLinks",
      itemType: "navLink",
      itemLabel: "Nav Link",
    },
  ],
};

export default Hero;
