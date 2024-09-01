import { FC } from 'react';

interface DividerProps {
  margin?: string;
}

const Divider: FC<DividerProps> = ({ margin = '' }) => {
  return <div className={`h-px bg-[#EAECF0] ${margin}`}></div>;
};

export default Divider;
