const handTrack = require("../lib");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
(async () => {
  const defaultParams = {
    flipHorizontal: true,
    outputStride: 16,
    imageScaleFactor: 0.7,
    maxNumBoxes: 20,
    iouThreshold: 0.7,
    scoreThreshold: 0.7,
    modelType: "MobilenetV2"
  };
  const model = await handTrack.load(defaultParams);
  const image = await loadImage("./demo/tester.jpg");
  const canvas = createCanvas(image.width, image.height);

  const ctx = canvas.getContext("2d");

  console.log();
  ctx.drawImage(image, 0, 0);
  const predictions = await model.detect(canvas);
  model.renderPredictions(predictions, canvas, ctx, image);

  let base64Image = canvas
    .toDataURL()
    .split(";base64,")
    .pop();
  fs.writeFileSync("./test.png", base64Image, { encoding: "base64" });
  console.log(predictions);
})();
