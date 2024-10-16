import { describe, expect, test } from "vitest";
import { MuiMode } from "../../components/mui/MuiMode";
import { render, screen } from "../../test-utils";

describe("MuiMode component", () => {

  test('renders correctly', () => {
    render(<MuiMode />);

    const headingEl = screen.getByRole('heading')

    expect(headingEl).toHaveTextContent(/Dark Mode/i);
  })

})
