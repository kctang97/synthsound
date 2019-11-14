'use strict';

var aLev = 1.0;
var rLev = 0;
var aTime = 0.001;
var decTime = 0.3;
var sPercent = 0.4;
var reTime = 0.5;
var env, s;
var mic;
let fft;

function setup() {
  createCanvas(1901, 680);

  env = new p5.Envelope();
  s = new p5.Oscillator('square');
  fft = new p5.FFT();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0, 0, 0, 20);
  var vol = mic.getLevel();
  fill(random(200, 255),random(200, 255),random(200, 255), random(200, 255));
  ellipse(random(width * 2), random(height * 2), 5, 5, vol * 10, vol * 10);


  let spectrum = fft.analyze();
  noStroke();
  fill(random(230),random(220), random(230)); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
  let x = map(i, 0, spectrum.length, 0, width);
  let h = -height + map(spectrum[i], random(15), 400, height, 0);
  rect(x * 1.5, height, width / spectrum.length, h )
  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(random(170, 200),random(170, 200),random(170, 200));
  for (var i = 0; i< waveform.length; i++){
  let x = map(i - 2, 0, waveform.length, 0, width  / 0.15);
  let y = map(waveform[i], -1, 1, 0, height);
  vertex(x,y);
  }
  endShape();
}
//keyboard
function keyPressed() {
  if (key === "a") {
    env.setADSR(aTime, decTime,sPercent - 0.3, reTime - 0.4);
    env.setRange(aLev - 0.7, rLev);
    s.amp(env);
    s.start();
    s.freq(1000);
    env.triggerAttack();
  } else if (key === 'A') {
    env.setADSR(aTime * 100, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev + 2, rLev);
    s.amp(env);
    s.start();
    s.freq(100);
    env.triggerAttack();
  }
  if (key === "s"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1300);
    env.triggerAttack();
  } else if (key === 'S') {
    env.setADSR(aTime * 10, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 10, rLev);
    s.amp(env);
    s.start();
    s.freq(300);
    env.triggerAttack();
  }
  if (key === "d"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1500);
    env.triggerAttack();
  } else if (key === 'D') {
    env.setADSR(aTime * 1000, decTime * 10, sPercent * 15, reTime - 0.4);
    env.setRange(aLev * 15, rLev);
    s.amp(env);
    s.start();
    s.freq(500);
    env.triggerAttack();
  }
  if (key === "f"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1700);
    env.triggerAttack();
  } else if (key === 'F') {
    env.setADSR(aTime * 1000, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 10, rLev);
    s.amp(env);
    s.start();
    s.freq(700);
    env.triggerAttack();
  }
  if (key === "g"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1900);
    env.triggerAttack();
  } else if (key === 'G') {
    env.setADSR(aTime * 1000, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 10, rLev);
    s.amp(env);
    s.start();
    s.freq(900);
    env.triggerAttack();
  }
  if (key === "q"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.2);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1200);
    env.triggerAttack();
  } else if (key === 'Q') {
    env.setADSR(aTime * 1000, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 10, rLev);
    s.amp(env);
    s.start();
    s.freq(200);
    env.triggerAttack();
  }
  if (key === "w"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1400);
    env.triggerAttack();
  } else if (key === 'W') {
    env.setADSR(aTime * 1000, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 10, rLev);
    s.amp(env);
    s.start();
    s.freq(400);
    env.triggerAttack();
  }
  if (key === "e"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1600);
    env.triggerAttack();
  } else if (key === 'E') {
    env.setADSR(aTime * 1000, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 10, rLev);
    s.amp(env);
    s.start();
    s.freq(600);
    env.triggerAttack();
  }
  if (key === "r"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(1800);
    env.triggerAttack();
  } else if (key === 'R') {
    env.setADSR(aTime * 1000, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 2, rLev);
    s.amp(env);
    s.start();
    s.freq(800);
    env.triggerAttack();
  }
  if (key === "t"){
    env.setADSR(aTime * 2, decTime / 2, sPercent / 20, reTime * 0.3);
    env.setRange(aLev - 0.5, rLev);
    s.amp(env);
    s.start();
    s.freq(2000);
    env.triggerAttack();
  } else if (key === 'T') {
    env.setADSR(aTime * 1000, decTime * 20, sPercent * 10, reTime - 0.4);
    env.setRange(aLev * 3, rLev);
    s.amp(env);
    s.start();
    s.freq(1000);
    env.triggerAttack();
  }
}

function keyReleased() {
  if (key == "a") {
    env.triggerRelease();
  } else if (key === 'A'){
    env.triggerRelease();
  }
  if (key == "s") {
    env.triggerRelease();
  } else if (key === 'S'){
    env.triggerRelease();
  }
  if (key == "d") {
    env.triggerRelease();
  } else if (key === 'D'){
    env.triggerRelease();
  }
  if (key == "f") {
    env.triggerRelease();
  } else if (key === 'F'){
    env.triggerRelease();
  }
  if (key == "g") {
    env.triggerRelease();
  } else if (key === 'G'){
    env.triggerRelease();
  }
  if (key == "h") {
    env.triggerRelease();
  } else if (key === 'H'){
    env.triggerRelease();
  }
  if (key == "j") {
    env.triggerRelease();
  } else if (key === 'J'){
    env.triggerRelease();
  }
  if (key == "k") {
    env.triggerRelease();
  } else if (key === 'K'){
    env.triggerRelease();
  }
  if (key == "l") {
    env.triggerRelease();
  } else if (key === 'L'){
    env.triggerRelease();
  }
  if (key == "q") {
    env.triggerRelease();
  } else if (key === 'Q'){
    env.triggerRelease();
  }
  if (key == "w") {
    env.triggerRelease();
  } else if (key === 'W'){
    env.triggerRelease();
  }
  if (key == "e") {
    env.triggerRelease();
  } else if (key === 'E'){
    env.triggerRelease();
  }
  if (key == "r") {
    env.triggerRelease();
  } else if (key === 'R'){
    env.triggerRelease();
  }
  if (key == "t") {
    env.triggerRelease();
  } else if (key === 'T'){
    env.triggerRelease();
  }
  if (key == "y") {
    env.triggerRelease();
  } else if (key === 'Y'){
    env.triggerRelease();
  }
  if (key == "u") {
    env.triggerRelease();
  } else if (key === 'U'){
    env.triggerRelease();
  }
  if (key == "i") {
    env.triggerRelease();
  } else if (key === 'I'){
    env.triggerRelease();
  }
  if (key == "o") {
    env.triggerRelease();
  } else if (key === 'O'){
    env.triggerRelease();
  }
  if (key == "p") {
    env.triggerRelease();
  } else if (key === 'P'){
    env.triggerRelease();
  }
}
