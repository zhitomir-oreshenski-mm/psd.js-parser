import PSD from "psd";

const psd = PSD.fromFile("./data/example.psd");
psd.parse();

console.log("psd tree export:", psd.tree().export());

// You can also use promises syntax for opening and parsing
PSD.open("./data/example.psd")
  .then(function (psd) {
    return psd.image.saveAsPng("./output.png");
  })
  .then(function () {
    console.log("Finished!");
  });
