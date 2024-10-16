import { logRoles, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Skills } from '../../components/skills/Skills';

describe('Skills component', () => {
  const skills = ['HTML', 'CSS', 'JAVASCRIPT'];

  test('Skills renders correctly', () => {
    render(<Skills skills={skills} />);
    const listEl = screen.getByRole('list');
    expect(listEl).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemsEl = screen.getAllByRole('listitem');
    expect(listItemsEl).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />);
    const loginBtnEl = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginBtnEl).toBeInTheDocument();
  });

  test('Start learning button not rendered', () => {
    render(<Skills skills={skills} />);

    const startLearningBtnEl = screen.queryByRole('button', {
      name: 'Start learning',
    });

    expect(startLearningBtnEl).not.toBeInTheDocument();
  })

  test('Start learning button renders eventually', async () => {
    const view = render(<Skills skills={skills} />);
    // logRoles(view.container)
    // screen.debug()
    const startLearningBtnEl = await screen.findByRole('button', {
      name: 'Start learning', 
    }, {
      timeout: 2000
    });
    // screen.debug()

    expect(startLearningBtnEl).toBeInTheDocument();
  })
}); 
