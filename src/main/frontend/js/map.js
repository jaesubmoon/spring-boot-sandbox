import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

document.addEventListener('DOMContentLoaded', () => {
    const map = new Map({
        target: 'baseMap',
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        view: new View({
            center: fromLonLat([126.92608, 37.52593]),
            zoom: 14
        })
    });
});