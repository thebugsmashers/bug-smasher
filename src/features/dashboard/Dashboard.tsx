import React, { useState } from 'react';
import Bug from '../bugs/bug';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { smash, selectDashboard } from './DashboardSlice';

export type BugObj = {
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
  const dashboard: any = useAppSelector(selectDashboard);
  const dispatch = useAppDispatch();
  console.log('dashboard:', dashboard);
  console.log('dashboardBugs:', dashboard.bugs);
  console.log(dashboard.bugs['1']);
  //console.log(typeof dashboard.bugs);
  // const bugsObj: BugsObjArr = dashboard.bugs;

  const bugs: JSX.Element[] = [];
  Object.keys(dashboard.bugs).forEach((key) => {
    bugs.push(
      <Bug
        id={key}
        key={key}
        smash={() => dispatch(smash(dashboard.bugs[key].bugId))}
        isSmashedBool={dashboard.bugs[key].isSmashed}
      />
    );
  });

  return <div>{bugs}</div>;
}
