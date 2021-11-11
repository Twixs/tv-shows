import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { GridList } from '../GridList';
import renderer from 'react-test-renderer';

describe('GridList component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<GridList items={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should show appropriate message on empty list', () => {
    const { getByText } = render(<GridList items={[]} />);

    expect(getByText(/No items to display\.\.\./i)).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const items = [
      {
        id: 1,
        name: 'test',
      },
    ];
    const { getByText } = render(
      <Router history={history}>
        <GridList items={items} />
      </Router>
    );

    expect(getByText(/test/i)).toBeInTheDocument();
  });
});
