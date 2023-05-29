import util from "util";
import PSD from "psd";

const filePath = "./data/example.psd";

const psd = PSD.fromFile(filePath);
psd.parse();

console.log(util.inspect(psd.tree().export(), { depth: null }));
