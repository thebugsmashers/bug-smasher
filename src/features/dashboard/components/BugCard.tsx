import React, { useState } from 'react';
import { BugCardProps } from '../types';
import styles from './BugCard.module.css';

function BugCard({ title, description, smashByDate }: BugCardProps): JSX.Element {
  const [bugTitle, setTitle]: [string, Function] = useState(title);
  const [bugDescription, setDescription]: [string, Function] = useState(description);

  const bugSmashEffects: string[] = ['SQUELCH!', 'SMUSH!', 'SMASH!', 'BOOM!', '...yuck'];
  const [smashEffectIndex, updateSmashEffectIndex]: [number, Function] = useState(0);

  function smashHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const button: HTMLButtonElement = event.currentTarget;
    // const randomIndex: number = Math.floor(Math.random() * bugSmashEffects.length);
    button.classList.add(styles.smashing);
    button.textContent = ` ${bugSmashEffects[smashEffectIndex]} 🕷`;

    updateSmashEffectIndex((smashEffectIndex + 1) % bugSmashEffects.length);
    setTimeout(() => {
      button.classList.remove(styles.smashing);
      button.textContent = 'Smash it!';
    }, 750);
  }

  // Add accessibility labels.
  return (
    <div className={styles.bugCard}>
      <h1>{bugTitle}</h1>
      <p>{bugDescription}</p>
      <p>{`Smash By: ${smashByDate}`}</p>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={smashHandler}>Smash it!</button>
      </div>
    </div>
  );
}

export default BugCard;
