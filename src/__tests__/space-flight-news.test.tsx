import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SpaceFlightNewsItem } from '../components/space-flight-item';

describe('SpaceFlightNews Component', () => {
  test('should render the component', () => {
    render(
      <SpaceFlightNewsItem
        isInverted={false}
        spaceFlight={{
          id: '32',
          imageUrl: 'aa',
          publishedAt: '10-11-2000',
          summary: '',
          title: '',
          url: '',
        }}
      />
    );

    const text = screen.getByTestId('flight-item');

    expect(text).toBeInTheDocument();
  });
});
