import { describe, expect, test } from "vitest";
import Card from "../../components/card/Card";
import { render, screen } from "@testing-library/react";

describe("Card component", () => {
  test("Card renders correctly", () => {
    render(<Card />);

    expect(screen.getByText("Card")).toBeInTheDocument();
  });
})