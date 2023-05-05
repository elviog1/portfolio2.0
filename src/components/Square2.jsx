import React, { useEffect } from 'react';

function Square1({col,width,height}) {
  useEffect(() => {
    const square = document.querySelector('.background-square2');

    function moveSquare() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const randomX = Math.floor(Math.random() * (windowWidth - 20));
      const randomY = Math.floor(Math.random() * (windowHeight - 20));

      const deltaX = randomX - parseInt(square.style.left || 0);
      const deltaY = randomY - parseInt(square.style.top || 0);

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const duration = distance * 4;

      square.style.transition = `transform ${duration}ms linear`;
      square.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      setTimeout(() => {
        square.style.transition = '';
        moveSquare();
      }, duration);
    }

    moveSquare();
  }, []);

  return <div className={`background-square2 rounded fixed ${width} ${height} ${col} -z-10`}></div>;
}

export default Square1;