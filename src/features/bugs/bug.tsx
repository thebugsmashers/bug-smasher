import React from 'react';

export default function Bug(props: any) {
  return (
    <div>
      <div>{`${props.isSmashedBool}`}</div>
      <button
        className={'bug'}
        aria-label="Smash"
        onClick={() => {
          props.smash(props.id);
        }}
      >
        Smash
      </button>
    </div>
  );
}
