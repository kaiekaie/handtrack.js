const test = require("@tensorflow/tfjs-converter");

let pop = test.loadGraphModel(
  "https://cdn.jsdelivr.net/npm/handtrackjs/models/web/ssdlitemobilenetv2/tensorflowjs_model.pb"
);

pop.then(e => console.log(e));
