import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Episodes } from '../Episodes';

const loadingState = {
  loading: true,
  current: null,
  error: false,
};

const currentItemState = {
  loading: false,
  current: {
    id: 1,
    name: 'My test',
    summary: '<p>Testing test</p>',
  },
  error: false,
};

const mockStore = configureMockStore();

describe('Episodes Page', () => {
  const history = createMemoryHistory();
  history.push('/episodes/1');

  it('has loading message', () => {
    const store = mockStore({ episodes: loadingState });
    const { getByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <Episodes />
        </Provider>
      </Router>
    );

    expect(getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const store = mockStore({ episodes: currentItemState });
    const tree = renderer
      .create(
        <Router history={history}>
          <Provider store={store}>
            <Episodes />
          </Provider>
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
