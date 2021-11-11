import { render } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const initialState = {
  loading: false,
  data: null,
  error: false,
};

test('App renders correctly', () => {
  const history = createMemoryHistory();
  const mockStore = configureMockStore();
  const store = mockStore({ shows: initialState });

  const { getByText } = render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  const linkElement = getByText(/tv shows/i);
  expect(linkElement).toBeInTheDocument();
});
