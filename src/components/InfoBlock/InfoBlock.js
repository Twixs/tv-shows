import React from 'react';
import s from './InfoBlock.module.scss';

export const InfoBlock = ({ data }) => (
  <div className={s.InfoWrapper}>
    <img src={data?.image?.medium} alt={data.name} />
    <div className={s.Details}>
      <h2>{data.name}</h2>
      <p dangerouslySetInnerHTML={{ __html: data.summary }} />
    </div>
  </div>
);
