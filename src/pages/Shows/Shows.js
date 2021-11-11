import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentShowDataStart, selectCurrentShow } from '../../store/slices';
import s from './Shows.module.scss';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { EpisodeListItem } from './components/EpisodeListItem/EpisodeListItem';

export const Shows = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { show, episodes, loading } = useSelector(selectCurrentShow);

  useEffect(() => {
    dispatch(getCurrentShowDataStart(id));
  }, [dispatch, id]);

  if (loading || !show) {
    return <p>Loading...</p>;
  }

  return (
    <div className={s.ShowWrapper}>
      <InfoBlock data={show} />
      {episodes && (
        <>
          <h3>Episodes</h3>
          {episodes.map((episode) => (
            <EpisodeListItem key={episode.id} episode={episode} />
          ))}
        </>
      )}
    </div>
  );
};
