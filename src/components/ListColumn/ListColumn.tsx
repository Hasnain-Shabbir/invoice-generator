import { FC } from 'react';

interface ListColumnProps {
  listData: string[] | string;
  styles?: string;
  title: string;
}

const ListColumn: FC<ListColumnProps> = ({ title, styles = '', listData }) => {
  const renderListItems = () => {
    if (Array.isArray(listData)) {
      return listData.map((item, index) => (
        <li key={index} className="font-medium">
          {item}
        </li>
      ));
    }

    return <li className="font-medium">{listData}</li>;
  };

  return (
    <div className={styles}>
      <h4 className="mb-3 text-secondary-50">{title}</h4>
      <ul className="space-y-1.5 break-all leading-loose">
        {renderListItems()}
      </ul>
    </div>
  );
};

export default ListColumn;
