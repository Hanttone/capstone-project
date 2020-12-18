import Button from './Button';
import {
  render,
  fireEvent,
} from '@testing-library/react';

describe('Button', () => {
  it('fires a function on click', () => {
    const onPlayerClick = jest.fn();
    const { getByText } = render(
      <Button
        onPlayerClick={onPlayerClick}
        text="Play"
      />
    );

    fireEvent.click(getByText('Play'));
    expect(onPlayerClick).toHaveBeenCalled();
  });
  it('is displaying text correctly', () => {
    const { getByText } = render(
      <Button text="Play" />
    );
    getByText('Play');
  });
  it('has a disabled attribute', () => {
    const { getByText } = render(
      <Button text="Play" disabled />
    );
    getByText('Play').hasAttribute('disabled');
  });
});
