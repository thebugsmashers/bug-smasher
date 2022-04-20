import React from 'react';
import { render } from '@testing-library/react';
import BugCard from './BugCard';
import { BugCardProps } from '../types';

describe('BugCard component', () => {
  const initialState: BugCardProps = {
    title: 'Submit button not working',
    description: 'Nothing appears to happen when the submit button is pressed.',
    smashByDate: '4/29',
    priority: 1,
  };

  test('Renders the bug card\'s information', () => {
    const {
      title, description, smashByDate, priority,
    } = initialState;

    const { getByText } = render(
      <BugCard
        title={title}
        description={description}
        smashByDate={smashByDate}
        priority={priority}
      />,
    );

    expect(getByText(/Submit button not working/)).toBeInTheDocument();
    expect(getByText(/Nothing appears to happen when the submit button is pressed./)).toBeInTheDocument();
    expect(getByText(/4\/29/)).toBeInTheDocument();
  });
});
