import React from 'react';
import { Link } from 'react-router-dom';
import s from './GridList.module.scss';

export const GridList = ({ items }) => {
  if (!items || !items.length) {
    return <p>No items to display...</p>;
  }

  return (
    <div className={s.List}>
      {items.map((item) => (
        <Link to={`/shows/${item.id}`} key={item.id} className={s.ListItemLink}>
          <div className={s.ListItem}>
            <img src={item?.image?.medium} alt={item?.name} />
            <h3 className={s.ListItemTitle}>{item.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};
