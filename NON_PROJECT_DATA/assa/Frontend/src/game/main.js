// src/game/main.js
import { GameLevel } from './scenes/GameLevel';
import { Boot } from './scenes/Boot';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import { AUTO, Game, Scale } from 'phaser';

export default function StartGame(containerId) {
  const config = {
    type: AUTO,
    parent: containerId, // Используем ID, переданный из React-компонента
    width: 1280,         // Твои оригинальные размеры игры
    height: 720,
    backgroundColor: '#028af8',
    
    basePath: '/',
    
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    
    scale: {
      mode: Scale.ENVELOP, 
      autoCenter: Scale.CENTER_BOTH
    },
    
    scene: [Boot, Preloader, MainMenu, GameLevel]
  };

  return new Game(config);
}