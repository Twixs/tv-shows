import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Shows } from '../../Shows';

const loadingState = {
  shows: {
    loading: true,
    shows: null,
    error: false,
  },
  currentShow: {
    loading: false,
    show: null,
    episodes: null,
    error: false,
  },
};

const showsState = {
  shows: {
    loading: false,
    shows: [
      {
        id: 1,
        name: 'My test',
        summary: '<p>Testing test</p>',
      },
    ],
    error: false,
  },
  currentShow: {
    loading: false,
    show: null,
    episodes: null,
    error: false,
  },
};

const mockStore = configureMockStore();

describe('Home Page', () => {
  const history = createMemoryHistory();

  it('has loading message', () => {
    const store = mockStore(loadingState);
    const { getByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <Shows />
        </Provider>
      </Router>
    );

    expect(getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const store = mockStore(showsState);
    const tree = renderer
      .create(
        <Router history={history}>
          <Provider store={store}>
            <Shows />
          </Provider>
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
