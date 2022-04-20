import React, { useState, useEffect } from 'react';
import BugCard from '../components/BugCard';
import BugData from '../BugData';

function BugsDisplay() {
  const [bugsList, updateBugsList]: [JSX.Element[], Function] = useState([]);

  useEffect(() => {
    fetch('/bug')
      .then((response) => BugData())
      .then((data) => {
        console.log(data);
        const list: JSX.Element[] = data.map((bug) => {
          const {
            _id,
            title,
            priority,
            description,
            is_smashed,
            smash_by,
            created_at,
          } = bug;

          return (
            <BugCard
              key={_id}
              title={title}
              description={description}
              smashByDate={smash_by}
              priority={priority}
              isSmashed={is_smashed}
              createdAt={created_at}
            />
          );
        });

        updateBugsList(list);
      });
  }, []);

  return (
    <div>
      {bugsList}
    </div>
  );
}

export default BugsDisplay;
