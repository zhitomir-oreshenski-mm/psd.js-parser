import PSD from "psd";

const filePath = "./data/example.psd";

PSD.open(filePath).then(function (psd) {
  console.log(psd.resources.resource("layerComps").export());
});
