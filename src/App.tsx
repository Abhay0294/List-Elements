import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className='parent-container'>
      <ul className="list">
        <li className="list-item">iPhone</li>
        <li className="list-item">Samsung</li>
        <li className="list-item">One +</li>
        <li className="list-item"></li>
      </ul>
    </div>
  );
};
