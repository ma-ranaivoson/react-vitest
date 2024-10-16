import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "../../hooks/use-counter/useCounter";

describe("useCounter hooks", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should accept and render the initial count', () =>{
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    })
    expect(result.current.count).toBe(10)
  })

  test('should increment the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    })
    const { increment } = result.current
    act(() => increment())
    expect(result.current.count).toBe(11)
  })

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter)
    const { decrement } = result.current
    act(() => decrement())
    expect(result.current.count).toBe(-1)
  })
})