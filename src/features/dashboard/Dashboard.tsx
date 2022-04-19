import React, { useState } from 'react';
import Bug from '../bugs/bug';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { smash, selectDashboard } from './DashboardSlice';

export default function Dashboard() {
  const dashboard = useAppSelector(selectDashboard);
  const dispatch = useAppDispatch();
  const bugs = [];
  for (let i = 0; i < 4; i++) {
    bugs.push(
      <Bug
        id={i}
        key={i}
        smash={smash}
        isSmashedBool={dashboard[i].isSmashed}
      />
    );
  }
  return <div>{bugs}</div>;
}
