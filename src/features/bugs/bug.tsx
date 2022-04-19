import React from 'react';

export default function Bug(props) {
  return (
    <div>
      <div>{`${props.isSmashed}`}</div>
      <button
        className={'bug'}
        aria-label="Smash"
        onClick={() => props.smash(props.id)}
      >
        Smash
      </button>
    </div>
  );
}
