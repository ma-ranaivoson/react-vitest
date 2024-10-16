import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { Counter } from '../../components/counter/Counter';

describe('Counter component', () => {
  test('Counter renders correctly', () => {
    const { container } = render(<Counter />);

    expect(container).toBeInTheDocument();
  });

  test('renders a count  of 10 after clicking the set button', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await  user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setBtn = screen.getByRole('button', {
      name: /set/i
    });
    await user.click(setBtn);

    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('10')
  });

  test('elements are focused in the right order', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    const setBtn = screen.getByRole('button', {
      name: /set/i
    })
    const incBtn = screen.getByRole('button', {
      name: /increment/i
    })

    await user.tab();
    expect(incBtn).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();
    
    await user.tab();
    expect(setBtn).toHaveFocus();
  })

});
