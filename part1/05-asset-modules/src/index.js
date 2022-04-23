import helloWorld from './hello_world'
import imgsrc from './assets/img-1.png'
import logoSvg from './assets/webpack-logo.svg'
import helloWebpack from './assets/HelloWebpack.txt'
import jpgMap from './assets/img-2.jpg'

helloWorld();

const img = document.createElement('img');
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.style.cssText = 'width: 600px; height: 200px';
img2.src = logoSvg;
document.body.appendChild(img2);

const block = document.createElement('div');
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue';
block.textContent = helloWebpack;
document.body.appendChild(block);

const img3 = document.createElement('img');
img3.style.cssText = 'width: 600px; height: 240px; display: block';
img3.src = jpgMap;
document.body.appendChild(img3);
