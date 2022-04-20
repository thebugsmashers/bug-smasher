import React, { useState } from 'react';
import { BugCardProps } from '../types';
import styles from './BugCard.module.css';

function BugCard({ title, description, smashByDate }: BugCardProps): JSX.Element {
  // These pieces of state currently are never changed,
  // but they exist in case future functionality wants to change them.
  const [bugTitle, setTitle]: [string, Function] = useState(title);
  const [bugDescription, setDescription]: [string, Function] = useState(description);

  // These words are displayed on the smash button after it's pressed.
  const bugSmashEffects: string[] = ['SMASH!', 'SQUELCH!', 'SMUSH!', 'SQUISH!', 'SMOOSH!', '...yuck'];
  const [smashEffectIndex, updateSmashEffectIndex]: [number, Function] = useState(0);

  // Makes the button turn red, get bigger, and display a word like 'SQUELCH!'
  // Then the whole bug card fades out.
  function smashHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const button: HTMLButtonElement = event.currentTarget;
    // The 'smashing' class makes the button big.
    button.classList.add(styles.smashing);
    // The 'smashed' class makes the button red.
    button.classList.add(styles.smashed);
    button.textContent = ` ${bugSmashEffects[smashEffectIndex]} 🕷`;

    // Make it so that the next bug that's smashed displays a different 'smash effect' word.
    updateSmashEffectIndex((smashEffectIndex + 1) % bugSmashEffects.length);

    // Fade the bug card out and then remove it from the DOM.
    setTimeout(() => {
      // Shrink the button back to normal size.
      button.classList.remove(styles.smashing);

      // This is all to select the bug card element.
      const buttonContainer: HTMLElement | null = button.parentElement;
      if (!buttonContainer) {
        return;
      }
      const bugCard: HTMLElement | null = buttonContainer.parentElement;
      if (!bugCard) {
        return;
      }

      // Fade out the bug card.
      bugCard.classList.add(styles.archived);

      setTimeout(() => bugCard.remove(), 1500);
    }, 750);
  }

  // TO DO: Add accessibility labels.
  return (
    <div className={styles.bugCard}>
      <h1>{bugTitle}</h1>
      <p>{bugDescription}</p>
      <p>{`Smash By: ${smashByDate}`}</p>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={smashHandler} aria-label="Smash the bug!">Smash it!</button>
      </div>
    </div>
  );
}

export default BugCard;
