import React, { useState } from 'react';
import startLogo from './assets/start.png';
import cn from 'classnames';

import { blocksArray, recentlyArray, mostReadArray, sixBlocks, officeBlocks } from './const';

import './App.scss';


const SmallBox = React.memo(({ img, text }) => (
  <p className="small-block">
    <img src={img} alt={text} />
  </p>
));

const Row = React.memo(({ img, text }) => (
  <div className="menu-row">
    <img src={img} alt={text} />
    {text}
  </div>
));

const BigBlock = React.memo(({ img, text }) => (
  <div className="bigBlock">
   <div className="bigBlock-container">
    <img src={img} alt={text}/>
      {/* <p>text</p> */}
    </div>
  </div>
));

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const onStartClick = () => { setOpen(!isOpen) }
  const startClasNames = cn('menu', { active: isOpen })
  const onClose = () => { setOpen(false) }
  return (
    <section className="container">
      <div className="closer" onClick={onClose} />
      <div className="bottombar">
        <div className="start" onClick={onStartClick}>
          <img src={startLogo} alt="start"/>
        </div>
      </div>
      <div className={startClasNames}>
        <div className="menu-left-side">
          {blocksArray.map((block, index) => <SmallBox img={block.img} text={block.name} key={block.name + index} />)}
        </div>
        <div className="menu-list">
          <h3 className="menu-list-title">Recently</h3>
          {recentlyArray.map((cur, index) => <Row text={cur.name} img={cur.img} key={cur.name + index}/>)}
          <h3 className="menu-list-title">Most Read</h3>
          {mostReadArray.map((cur, index) => <Row text={cur.name} img={cur.img} key={cur.name + index}/>)}
        </div>
        <div className="grid-side">
          <h3 className="menu-list-title">Office</h3>
          <div className="grid-side-container">
            {officeBlocks.map((cur, index) => <BigBlock text={cur.name} img={cur.img} key={cur.name + index}/>)}
          </div>
          <h3 className="menu-list-title">Others</h3>
          <div className="grid-side-container">
            {sixBlocks.map((cur, index) => <BigBlock text={cur.name} img={cur.img} key={cur.name + index}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;
