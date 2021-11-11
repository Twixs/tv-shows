import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { InfoBlock } from '../InfoBlock';

describe('InfoBlock component', () => {
  const data = {
    name: 'Test',
    summary: '<p>Testing InfoBlock</p>',
  };

  it('should match snapshot', () => {
    const tree = renderer.create(<InfoBlock data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { getByText } = render(<InfoBlock data={data} />);

    expect(getByText(/Testing InfoBlock/i)).toBeInTheDocument();
  });
});
