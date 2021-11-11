import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Shows } from '../Shows';

const loadingState = {
  loading: true,
  show: null,
  episodes: null,
  error: false,
};

const showInfoState = {
  loading: false,
  show: {
    id: 1,
    name: 'My test show',
    summary: '<p>Testing test</p>',
  },
  episodes: [
    {
      id: 1,
      name: 'My test episode',
      summary: '<p>Testing test episode</p>',
    },
  ],
  error: false,
};

const mockStore = configureMockStore();

describe('Shows Page', () => {
  const history = createMemoryHistory();

  it('has loading message', () => {
    const store = mockStore({ currentShow: loadingState });
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
    const store = mockStore({ currentShow: showInfoState });
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
