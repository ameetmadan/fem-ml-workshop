import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { handleFilePicker, loadImage, showResult } from "./utils.js";

let model;

const init = async () => {
  model = await cocoSsd.load();
  console.log("Model loaded");
  handleFilePicker(predict)
};

const predict = async (img) => {
  const predictions = await model.detect(img);
  console.log(predictions);
  showResult(predictions);
};

init();