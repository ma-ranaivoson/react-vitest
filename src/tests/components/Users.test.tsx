import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Users } from "../../components/users/Users";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

describe('Users component', () => {
  test('renders correctly', () => {
    render(<Users />);
    const headingEl = screen.getByRole('heading', {
      name: 'Users'
    }); 
    expect(headingEl).toBeInTheDocument();
  });

  test('renders a list of users', async() => {
    render(<Users />);
    const listEl = await screen.findAllByRole('listitem');
    expect(listEl).toHaveLength(4);
  })

  test('renders error', async() => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.error()
      })
    )

    render(<Users />);

    const errorEl = await screen.findByText('Error fetching users');
    expect(errorEl).toBeInTheDocument();
  })
});   
