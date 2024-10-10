import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

test('render count is 0', async () => {
  const { getByText } = render(<App />)

  expect(getByText('count is 0')).toBeInTheDocument()
})
// import { describe, it, expect } from 'vitest'

// describe('A truthy statement', () => {
//   it('should be equal to 2', () => {
//     expect(1+1).toEqual(2)
//   })
// })