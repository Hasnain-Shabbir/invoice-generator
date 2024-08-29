interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { children } = props;

  return <div className="mx-auto max-w-container">{children}</div>;
};

export default Container;
