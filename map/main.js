import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';
import {getCenter} from 'ol/extent';

import ImageSource from 'ol/source/Image';
import MapboxVectorLayer from 'ol/layer/MapboxVector';
import Collection from 'ol/Collection';

// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.

function printMap(res,src) {

  let extent = [0, 0, res[0], res[1]];
  const projection = new Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: extent,
  });

  let map = new Map({
    layers: [
      new ImageLayer({
        source: new Static({
          url: src,
          projection: projection,
          imageExtent: extent,
        }),
      }),
    ],
    target: 'floor',
    view: new View({
      projection: projection,
      center: getCenter(extent),
      zoom: 1.5,
      maxZoom: 4,
    }),
  });

  console.log(
      '\n 1', map,
      '\n 2', Map,
  );
}
window.printMap = printMap;
printMap([3510,2483],'../test_img/1.jpg')

window.printFloor = function(event) {

  let size = JSON.parse(event.composedPath()[0].dataset.size);
  let getImg = '../test_img/' + event.composedPath()[0].innerText + '.jpg';

  printMap(size,getImg);
}
