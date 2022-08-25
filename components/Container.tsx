import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  id?: string
}

const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
  
  return (
    <div id={id}
      className={`flex items-center min-h-screen lg:px-28 md:px-14 px-6 py-12 bg-primary ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
