import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Grid } from '../../components/grid/Grid';

describe('Grid component', () => {
  test('Grid renders correctly', () => {
    render(<Grid />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test('Grid renders with name', () => {
    render(<Grid name='Malala' />);
    const textElement = screen.getByText(/hello malala/i);
    expect(textElement).toBeInTheDocument();
  });
});
