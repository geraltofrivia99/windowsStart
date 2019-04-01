import React, { useState } from 'react';
import startLogo from './assets/start.png';
import cn from 'classnames';

import { blocksArray } from './const';

import './App.scss';


const SmallBox = React.memo(({ img, text }) => (
  <p className="small-block">
    <img src={img} alt={text} />
  </p>
));

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const onStartClick = () => { setOpen(!isOpen) }
  const startClasNames = cn('menu', { active: isOpen })
  return (
    <section className="container">
      <div className="bottombar">
        <div className="start" onClick={onStartClick}>
          <img src={startLogo} alt="start"/>
        </div>
      </div>
      <div className={startClasNames}>
        <div className="menu-left-side">
          {blocksArray.map((block, index) => <SmallBox img={block.img} text={block.name} key={block.name + index} />)}
        </div>
      </div>
    </section>
  )
}

export default App;
