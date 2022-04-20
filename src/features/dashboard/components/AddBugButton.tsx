import styles from './AddBug.module.css';
import React, { useState } from 'react';

function AddBug({}) {
  function addBug() {
    const title: String = document.getElementById('name')!.innerText;
    const description: String =
      document.getElementById('description')!.innerText;
    const date: String = document.getElementById('date')!.innerText;
    //send data about bug to db
  }
  return (
    <div className={styles.addBug}>
      <h1>Add New Bug</h1>
      <div className={styles.flexBox}>
        <div className={styles.inputs}>
          <input type="text" placeholder="Bug Name" id="name"></input>
          <input type="text" placeholder="Bug Description"></input>
          <input type="date" placeholder="Smash By Date" id="date"></input>
          <button
            className={styles.buttonTwo}
            onClick={() => {
              addBug();
            }}
          >
            Submit
          </button>
        </div>
        <div className={styles.logoOptions}>
          <div>
            <input type="checkbox" id="fruitFlyCheckbox" />
            <label htmlFor="fruitFlyCheckbox">
              <img
                src="data:image/png;base64,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"
                width={50}
                height={50}
                alt="FruitFly"
              />
              Low Priority
            </label>
          </div>
          <div>
            <input type="checkbox" id="waspCheckbox" />
            <label htmlFor="waspCheckbox">
              <img
                src="https://i.cbc.ca/1.3624693.1502504172!/fileImage/httpImage/yellow-jacket.jpg"
                width={50}
                height={50}
                alt="Wasp"
              />
              Moderate Priority
            </label>
          </div>
          <div>
            <input type="checkbox" id="redVelvetAntCheckbox" />
            <label htmlFor="redVelvetAntCheckbox">
              <img
                src="data:image/jpeg;base64,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"
                width={50}
                height={50}
                alt="RedVelvetAnt"
              />
            </label>
            High Priority
          </div>
          <div>
            <input type="checkbox" id="tarantulaHawkCheckbox" />
            <label htmlFor="tarantulaHawkCheckbox">
              <img
                src="https://www.sciencefriday.com/wp-content/uploads/2016/06/shutterstock_233499883.jpg"
                width={50}
                height={50}
                alt="TarantulaHawk"
              />
            </label>
            Immediate Threat
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBug;
