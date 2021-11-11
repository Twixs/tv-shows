import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEpisodeDataStart, selectEpisodes } from '../../store/slices';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import s from './Episodes.module.scss';

export const Episodes = () => {
  const { episodeId } = useParams();
  const dispatch = useDispatch();
  const { current, loading } = useSelector(selectEpisodes);

  useEffect(() => {
    dispatch(getEpisodeDataStart(episodeId));
  }, [dispatch, episodeId]);

  if (loading || !current) {
    return <p>Loading...</p>;
  }

  return (
    <div className={s.EpisodeWrapper}>
      <InfoBlock data={current} />
    </div>
  );
};
