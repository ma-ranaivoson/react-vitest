import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import App from '../App'

describe('App component', () => {
  
  test('renders correctly', async () => {
    const view = render(<App />)
    expect(view.container).toBeInTheDocument()
  })
  
  test('render count is 0', async () => {
    render(<App />)
    const btnCountEl = screen.getByRole('button', {
      name: /count is 0/i
    })

    expect(btnCountEl).toBeInTheDocument()
  })

  test('render count is 1 after click the button', async () => {
    userEvent.setup()
    render(<App />)
    const incrementBtn = screen.getByRole('button', {
      name: /count is 0/i
    });

    await userEvent.click(incrementBtn)

    expect(incrementBtn).toHaveTextContent('1')
  })

  test('render count is 2 after click the button twice', async () => {
    userEvent.setup()
    render(<App />)
    const incrementBtn = screen.getByRole('button', {
      name: /count is 0/i
    });

    await userEvent.click(incrementBtn)
    await userEvent.click(incrementBtn)
  
    expect(incrementBtn).toHaveTextContent('2')

  })
})
