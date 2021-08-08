import React from 'react';
import * as css from './totalStatistics.module.css';

const TotalStatistics = (props) => {
  return (
    <>
      <section className={css.totalStatistics}>
        <ul className={css.totalStatisticsList}>
          <li className={css.statsTopRow}>
            <div className={css.statNumberWrapper}>
              <h2>Total Tests</h2>
            </div>
          </li>
          <li className={css.statsTopRow}>
            <div className={css.statNumberWrapper}>
              <h2>Total Cases</h2>
            </div>
          </li>
          <li className={css.statsTopRow}>
            <div className={css.statNumberWrapper}>
              <h2>Total Deaths</h2>
            </div>
          </li>
          <li className={css.statsLowRow}>
            <div className={css.statNumberWrapper}>
              <h2>Active</h2>
            </div>
          </li>
          <li className={css.statsLowRow}>
            <div className={css.statNumberWrapper}>
              <h2>Critical</h2>
            </div>
          </li>
          <li className={css.statsLowRow}>
            <div className={css.statNumberWrapper}>
              <h2>Recovered</h2>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default TotalStatistics;
