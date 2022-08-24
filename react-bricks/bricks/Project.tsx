import { types, Link } from "react-bricks/frontend";

interface ProjectProps {
  title: string;
  description: string;
  stack: string;
  href: string;
}

const Project: types.Brick<ProjectProps> = ({
  title,
  description,
  href,
  stack,
  ...rest
}) => {
  return (
    <Link
      href={href}
      {...rest}
      className="flex flex-col justify-between  border-2 hover:bg-base hover:shadow-base/50 border-base rounded-lg  p-3 text-base hover:text-dark break-words duration-75 cursor-pointer"
    >
      <div className="space-y-2">
        <h3 className=" font-semibold text-xl">{title}</h3>
        <p className="font-base text-sm">{stack}</p>
      </div>
    </Link>
  );
};

Project.schema = {
  name: "project",
  label: "Project",
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: "title",
      label: "Title",
      type: types.SideEditPropType.Text,
    },
    {
      name: "description",
      label: "Description",
      type: types.SideEditPropType.Text,
    },
    {
      name: "stack",
      label: "Stack",
      type: types.SideEditPropType.Text,
    },
    {
      name: "href",
      label: "Link (external or path)",
      type: types.SideEditPropType.Text,
    },
  ],
};

export default Project;
