import PSD from "psd";

const filePath = "./data/example.psd";
const start = new Date();

PSD.open(filePath)
  .then(function (psd) {
    psd
      .tree()
      .descendants()
      .forEach(function (node) {
        console.log("node:", node);
        if (node.isGroup()) return true;
        node.saveAsPng("./output/" + node.name + ".png").catch(function (err) {
          console.log(err.stack);
        });
      });
  })
  .then(function () {
    console.log("Finished in " + (new Date() - start) + "ms");
  })
  .catch(function (err) {
    console.log(err.stack);
  });

// Example layer (node) of psd's document tree

/*
  node: <ref *1> Layer {
  layer: Layer {
    file: File {
      data: <Buffer 38 42 50 53 00 01 00 00 00 00 00 00 00 03 00 00 02 58 00 00 03 84 00 08 00 03 00 00 00 00 00 00 60 2c 38 42 49 4d 04 04 00 00 00 00 00 1f 1c 01 5a 00 ... 584172 more bytes>,
      pos: 512590
    },
    header: Header {
      file: [File],
      sig: '8BPS',
      version: 1,
      channels: 3,
      rows: 600,
      cols: 900,
      depth: 8,
      mode: 3
    },
    mask: Mask {
      file: [File],
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      size: 0
    },
    blendingRanges: { grey: [Object], channels: [Array] },
    adjustments: {
      name: [LazyExecute],
      layerId: [LazyExecute],
      blendClippingElements: [LazyExecute],
      blendInteriorElements: [LazyExecute],
      locked: [LazyExecute],
      metadata: [LazyExecute]
    },
    channelsInfo: [ [Object], [Object], [Object], [Object] ],
    blendMode: BlendMode {
      file: [File],
      blendKey: 'norm',
      opacity: 255,
      clipping: 0,
      clipped: false,
      flags: 8,
      mode: 'normal',
      visible: true
    },
    groupLayer: null,
    infoKeys: [ 'luni', 'lyid', 'clbl', 'infx', 'lspf', 'shmd' ],
    top: 0,
    left: 0,
    bottom: 600,
    right: 900,
    channels: 4,
    height: 600,
    rows: 600,
    width: 900,
    cols: 900,
    opacity: 255,
    visible: true,
    clipped: false,
    layerEnd: 26188,
    legacyName: 'Matte',
    layerId: [Function (anonymous)],
    blendClippingElements: [Function (anonymous)],
    blendInteriorElements: [Function (anonymous)],
    locked: [Function (anonymous)],
    metadata: [Function (anonymous)],
    image: LazyExecute {
      obj: [ChannelImage],
      file: [File],
      startPos: 128340,
      loaded: false,
      loadMethod: 'parse',
      loadArgs: [],
      passthru: []
    },
    node: [Circular *1]
  },
  parent: <ref *2> Group {
    layer: Layer {
      file: [File],
      header: [Header],
      mask: [Mask],
      blendingRanges: [Object],
      adjustments: [Object],
      channelsInfo: [Array],
      blendMode: [BlendMode],
      groupLayer: null,
      infoKeys: [Array],
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      channels: 4,
      height: 0,
      rows: 0,
      width: 0,
      cols: 0,
      opacity: 255,
      visible: true,
      clipped: false,
      layerEnd: 43744,
      legacyName: 'Version A',
      layerId: [Function (anonymous)],
      sectionDivider: [Function (anonymous)],
      locked: [Function (anonymous)],
      metadata: [Function (anonymous)],
      image: [LazyExecute],
      node: [Circular *2]
    },
    parent: Root {
      psd: [PSD],
      layer: [Object],
      parent: null,
      _children: [Array],
      name: null,
      forceVisible: null,
      coords: [Object],
      topOffset: 0,
      leftOffset: 0
    },
    _children: [ [Layer], [Layer], [Circular *1] ],
    name: 'Version A',
    forceVisible: null,
    coords: { top: 0, bottom: 600, left: 0, right: 900 },
    topOffset: 0,
    leftOffset: 0
  },
  _children: [],
  name: 'Matte',
  forceVisible: null,
  coords: { top: 0, bottom: 600, left: 0, right: 900 },
  topOffset: 0,
  leftOffset: 0
  
  */
