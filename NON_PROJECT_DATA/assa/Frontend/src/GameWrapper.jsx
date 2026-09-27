import React, { useEffect, useRef } from 'react';
import StartGame from './game/main';

const GameWrapper = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Запускаем Phaser только когда компонент смонтирован
      StartGame(containerRef.current.id);
    }

    // Очистка при уходе со страницы (опционально, если игра должна выгружаться)
    return () => {
      // Здесь можно добавить логику остановки игры, если нужно
    };
  }, []);

  return (
    <div id="game-container" ref={containerRef} style={{
        width: '100%',         // Твои оригинальные размеры игры
        height: '100%',
        position: 'relative',
        overflow: 'hidden'}}>
    </div>
  );
};

export default GameWrapper;