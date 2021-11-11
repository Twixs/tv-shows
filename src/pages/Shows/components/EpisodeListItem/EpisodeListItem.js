import React from 'react';
import { Link } from 'react-router-dom';
import s from './EpisodeListItem.module.scss';

export const EpisodeListItem = ({ episode }) => (
  <div className={s.ListItem}>
    <p className={s.ListItemShortInfo}>
      {episode.season}x{episode.number}:
    </p>
    <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
  </div>
);
