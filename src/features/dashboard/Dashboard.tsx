import React, { useState } from 'react';
import Bug from '../bugs/bug';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { smash, selectDashboard } from './DashboardSlice';

type BugObj = {
  bugId: number;
  title: string;
  priority: string;
  descrtiption: string;
  isSmashed: boolean;
  smashBy: string;
  createdAt: string;
};
type BugsObjArr = {
  number?: BugObj;
};

export default function Dashboard() {
  const dashboard = useAppSelector(selectDashboard);
  const dispatch = useAppDispatch();
  console.log('dashboard:', dashboard);
  console.log('dashboardBugs:', dashboard.bugs);
  console.log('BUG1:', dashboard.bugs[1]);
  // const bugsObj: BugsObjArr = dashboard.bugs;

  const bugs = [];
  for (let i = 0; i < 4; i++) {
    bugs.push(
      <Bug
        id={i}
        key={i}
        smash={dispatch(smash)}
        isSmashedBool={dashboard.bugs}
      />
    );
  }
  return <div>{bugs}</div>;
}
