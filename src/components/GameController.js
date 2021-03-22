import React, { useState } from 'react';
import Board from './Board';

function GameController() {
  const [easyImgs] = useState([
    { name: 'Yasuo', source: './easy/Yasuo.jpg', clicked: false },
    { name: 'Yone', source: './easy/Yone.jpg', clicked: false },
    { name: 'Yorick', source: './easy/Yorick.jpg', clicked: false },
    { name: 'Yuumi', source: './easy/Yuumi.jpg', clicked: false },
  ]);

  const [medImgs] = useState([
    { name: 'Aatrox', source: './med/Aatrox.jpg', clicked: false },
    { name: 'Ahri', source: './med/Ahri.jpg', clicked: false },
    { name: 'Akali', source: './med/Akali.jpg', clicked: false },
    { name: 'Alistar', source: './med/Alistar.jpg', clicked: false },
    { name: 'Amumu', source: './med/Amumu.jpg', clicked: false },
    { name: 'Anivia', source: './med/Anivia.jpg', clicked: false },
    { name: 'Annie', source: './med/Annie.jpg', clicked: false },
    { name: 'Aphelios', source: './med/Aphelios.jpg', clicked: false },
    { name: 'Ashe', source: './med/Ashe.jpg', clicked: false },
    { name: 'Azir', source: './med/Azir.jpg', clicked: false },
  ]);

  const [hardImgs] = useState([
    { name: "Kai'Sa", source: './hard/Kaisa.jpg', clicked: false },
    { name: 'Kalista', source: './hard/Kalista.jpg', clicked: false },
    { name: 'Karma', source: './hard/Karma.jpg', clicked: false },
    { name: 'Karthus', source: './hard/Karthus.jpg', clicked: false },
    { name: 'Kassadin', source: './hard/Kassadin.jpg', clicked: false },
    { name: 'Katarina', source: './hard/Katarina.jpg', clicked: false },
    { name: 'Kayle', source: './hard/Kayle.jpg', clicked: false },
    { name: 'Kayn', source: './hard/Kayn.jpg', clicked: false },
    { name: 'Singed', source: './hard/Singed.jpg', clicked: false },
    { name: "Kha'Zix", source: './hard/Khazix.jpg', clicked: false },
    { name: 'Kindred', source: './hard/Kindred.jpg', clicked: false },
    { name: 'Kled', source: './hard/Kled.jpg', clicked: false },
    { name: "Kog'Maw", source: './hard/KogMaw.jpg', clicked: false },
    { name: 'Sejuani', source: './hard/Sejuani.jpg', clicked: false },
    { name: 'Senna', source: './hard/Senna.jpg', clicked: false },
    { name: 'Seraphine', source: './hard/Seraphine.jpg', clicked: false },
    { name: 'Sett', source: './hard/Sett.jpg', clicked: false },
    { name: 'Shaco', source: './hard/Shaco.jpg', clicked: false },
    { name: 'Shen', source: './hard/Shen.jpg', clicked: false },
    { name: 'Shyvana', source: './hard/Shyvana.jpg', clicked: false },
  ]);

  const [mode, setMode] = useState('easy');

  const handleMode = (buttonMode) => {
    setMode(buttonMode);
  };

  const handleProps = () => {
    if (mode === 'easy') return [easyImgs, 4];
    else if (mode === 'med') return [medImgs, 10];
    return [hardImgs, 20];
  };

  return (
    <Board
      handleMode={handleMode}
      imgs={[...handleProps()[0]]}
      maxScore={handleProps()[1]}
    />
  );
}

export default GameController;
