import { afterAll, afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { server } from '../mocks/server';

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())