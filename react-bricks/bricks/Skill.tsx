import { types } from "react-bricks/frontend";

interface SkillProps {
  text: string;
}

const Skill: types.Brick<SkillProps> = ({ text = "React", ...rest }) => {
  return (
    <div {...rest} className="py-1 px-2 border-2 rounded-lg border-base w-fit mr-2 mb-2">
      <span>{text}</span>
    </div>
  );
};

Skill.schema = {
  name: "skill",
  label: "Skill",
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: "text",
      label: "Text",
      type: types.SideEditPropType.Text,
    },
  ],
};

export default Skill;
