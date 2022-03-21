import React from 'react';
import './ProgressCost.sass';

interface IProgressCost {
  current: number;
  list: number[];
  openMenu: boolean;
}

export const ProgressCost: React.FC<IProgressCost> = ({ current, list, openMenu }) => {
  return (
    <div className={ `progress-cost ${ openMenu && 'open' }` }>
      <ul className="list">
        { list.map(item => <li key={ item }>${ new Intl.NumberFormat('en-US').format(item) }</li>) }
      </ul>
    </div>
  );
};
