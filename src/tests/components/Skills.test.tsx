import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Skills } from "../../components/skills/Skills";

describe("Skills component", () => {
  const skills = ['HTML', 'CSS', 'JAVASCRIPT']

  test("Skills renders correctly", () => {
    render(<Skills skills={skills} />);
    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();
  });


  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemsEl = screen.getAllByRole("listitem");
    expect(listItemsEl).toHaveLength(skills.length);
  })
})