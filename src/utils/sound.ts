import { Howl } from 'howler';

const sounds = {
  correct: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2018/correct-answer-tone.wav'],
    volume: 0.5
  }),
  incorrect: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2019/wrong-answer-buzz.wav'],
    volume: 0.5
  }),
  achievement: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2020/achievement-unlocked.wav'],
    volume: 0.7
  }),
  tick: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2021/clock-ticking.wav'],
    volume: 0.3,
    loop: true
  })
};

export const playSound = (type: keyof typeof sounds) => {
  sounds[type].play();
};

export const stopSound = (type: keyof typeof sounds) => {
  sounds[type].stop();
};