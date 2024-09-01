interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { children } = props;

  return <div className="mx-auto max-w-container px-8">{children}</div>;
};

export default Container;
