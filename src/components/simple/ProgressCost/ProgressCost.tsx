import React from 'react';
import './ProgressCost.sass';
import classNames from 'classnames';

interface IProgressCost {
  current: number;
  list: number[];
  openMenu: boolean;
}

export const ProgressCost: React.FC<IProgressCost> = ({ current, list, openMenu }) => {
  return (
    <div className={ `progress-cost ${ openMenu && 'open' }` }>
      <ul className="list">
        { list.map((item, index) =>
          <li
            key={ item }
            className={ classNames({ active: list.length - 1 - current === index, muted: index > list.length - 1 - current }) }
          >
            ${ new Intl.NumberFormat('en-US').format(item) }
          </li>)
        }
      </ul>
    </div>
  );
};
