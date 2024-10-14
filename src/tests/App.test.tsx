import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('render count is 0', async () => {
  render(<App />)
  expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
})

test('render count is 0', async () => {
  render(<App />)
  expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
})
