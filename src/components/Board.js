import React, { useState, useEffect } from 'react';
import ImgCard from './ImgCard';

function Board(props) {
  const [imgs, setImgs] = useState([...props.imgs]);

  const [score, setScore] = useState({ current: 0, best: 0 });

  const shuffleImgs = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const resetImgClicked = () => {
    const resetImgs = imgs.map((img) => {
      return { ...img, clicked: false };
    });
    shuffleImgs(resetImgs);
    setImgs(resetImgs);
  };

  const resetScore = () => {
    setScore({ current: 0, best: 0 });
  };

  const checkScore = (index) => {
    if (imgs[index].clicked === true) {
      setScore({ ...score, current: 0 });
      resetImgClicked();
      return;
    }

    if (score.current === score.best)
      setScore({ current: score.current + 1, best: score.current + 1 });
    else setScore({ ...score, current: score.current + 1 });
  };

  const handleClick = (name) => {
    const clickedIndex = imgs.findIndex((img) => img.name === name);
    let imgsCopy = [...imgs];
    const imgClicked = { ...imgs[clickedIndex], clicked: true };
    imgsCopy[clickedIndex] = imgClicked;
    shuffleImgs(imgsCopy);
    setImgs(imgsCopy);
    checkScore(clickedIndex);
  };

  const gameMessage = () => {
    let message = score.current === 0 && score.best !== 0 && 'Try Again';
    if (score.current === props.maxScore) message = 'You Win!';
    return message;
  };

  useEffect(() => {
    shuffleImgs(props.imgs);
    setImgs([...props.imgs]);
  }, [props.imgs]);

  return (
    <div className="board">
      <div className="header">
        <div>
          <img src="./favicon.ico" alt="league icon" />
          <h1>LOL Memory</h1>
        </div>
        <div className="score">
          <p className="current">Score: {score.current}</p>
          <p className="best">Best Score: {score.best}</p>
        </div>
      </div>
      <div className="settings">
        <button
          onClick={() => {
            props.handleMode('easy');
            resetScore();
          }}
        >
          Easy
        </button>
        <button
          onClick={() => {
            props.handleMode('med');
            resetScore();
          }}
        >
          Medium
        </button>
        <button
          onClick={() => {
            props.handleMode('hard');
            resetScore();
          }}
        >
          Hard
        </button>
        <p className="message">{gameMessage()}</p>
      </div>
      <ImgCard imgs={imgs} handleClick={handleClick} />
    </div>
  );
}

export default Board;
