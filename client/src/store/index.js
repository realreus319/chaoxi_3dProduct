import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#6A686E',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  screen1: './screen1.png',
  screen2: './screen2.png',
  screen3: './screen3.png',
  screen4: './screen4.png',
});

export default state;