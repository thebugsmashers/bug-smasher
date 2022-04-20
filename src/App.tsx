import React from 'react';
import BugCard from './features/dashboard/components/BugCard';
import { BugCardProps } from './features/dashboard/types';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  const sampleBugProps: BugCardProps = {
    title: 'Page doesn\'t update on refresh.',
    description: 'I know for a fact that I posted a new message. I can see it if I load the page in a different tab. But refreshing the current tab doesn\'t display the new message.',
    smashByDate: 'tomorrow',
    priority: 2,
  };

  const {
    title, description, smashByDate, priority,
  } = sampleBugProps;

  return (
    <div className="App">
      <BugCard
        title={title}
        description={description}
        smashByDate={smashByDate}
        priority={priority}
      />
    </div>
  );
}

export default App;
