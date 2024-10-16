import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { CounterTwo } from '../../components/counter-two/CounterTwo';

describe('CounterTwo component', () => {
  test('CounterTwo renders correctly', () => {
    render(<CounterTwo count={0} />);
    const countElement = screen.getByText('Counter Two');
    expect(countElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    const user = userEvent.setup();
    const handleIncrement = vi.fn();
    const handleDecrement = vi.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );

    const incrementBtn = screen.getByRole('button', {
      name: /increment/i
    });
    const decrementBtn = screen.getByRole('button', {
      name: /decrement/i
    });

    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);

  });
});
