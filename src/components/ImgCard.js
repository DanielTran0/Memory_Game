import React from 'react';
import uniqid from 'uniqid';

function ImgCard(props) {
  const createCards = () => {
    return props.imgs.map((img) => {
      return (
        <div key={uniqid()} className="card">
          <img
            onClick={() => props.handleClick(img.name)}
            src={img.source}
            alt="game card"
          />
          <p>{img.name}</p>
        </div>
      );
    });
  };

  return <div className="allCards">{createCards()}</div>;
}

export default ImgCard;
