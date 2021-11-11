import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GridList } from '../../components/GridList/GridList';
import { getShowsStart, selectShows } from '../../store/slices';

export const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectShows);

  useEffect(() => {
    !data && dispatch(getShowsStart());
  }, [dispatch, data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <GridList items={data} />;
};
