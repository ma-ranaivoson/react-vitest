import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Application } from "../../components/application/Application";

describe("Application component", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const headingEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingEl).toBeInTheDocument();

    const sectionHeadingEl = screen.getByRole("heading", {
      name: "Section 1",
    });
    expect(sectionHeadingEl).toBeInTheDocument();

    const nameEl = screen.getByRole("textbox", {
      name: "Name", 
    });
    expect(nameEl).toBeInTheDocument();

    const nameEl2 = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(nameEl2).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const submitButtonEl = screen.getByRole("button");
    expect(submitButtonEl).toBeInTheDocument();
    
    const paragraphEl = screen.getByText(/all fields are mandatory/i);
    expect(paragraphEl).toBeInTheDocument();
    
    const nameEl4 = screen.getByDisplayValue("Vishwas");
    expect(nameEl4).toBeInTheDocument();

    
    const imageEl = screen.getByAltText("a person with a laptop");
    expect(imageEl).toBeInTheDocument();
    

  });
})