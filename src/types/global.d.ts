declare global {
  interface Window {
    localStream: any;
  }
}

window.localStream = window.localStream || {};

export interface Modelparams {
  flipHorizontal: boolean;
  outputStride: number;
  imageScaleFactor: number;
  maxNumBoxes: number;
  iouThreshold: number;
  scoreThreshold: number;
  modelType: string;
}

export interface predictions {
  bbox: number[];
  class: 0;
  score: number;
}
