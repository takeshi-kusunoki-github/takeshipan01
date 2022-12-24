/*
  GeoANalytics.js

*/

// Global変数
let map;

let baseMaps;



// path to csv data
let path = "data/Udon.csv";

let markers = L.featureGroup();
console.log(0)

// initialize jquery 利用
$(document).ready(function() {

  // 	// map作成
  console.log(10)
    createMap();

});

// Mapの基本設定
function createMap(){
  map = L.map('mapid',{
//    center: [36.0704404, 140.1205564], Tsukuba
//    center: [40.7836603, -73.9653136], // New york City
    center : [35.6820813,139.7644713], //Tokyo Station
    zoom: 15,
    // minZoom: 13,
    // maxZoom: 16
  });

  var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
  })
  osm.addTo(map);

  // //Thunder forest
  // var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  //       subdomains: 'abcd',
  //       maxZoom: 20
  // });
  // CartoDB_DarkMatter.addTo(map);

  //OpenTopMap
  var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
     maxZoom: 17,
     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  OpenTopoMap.addTo(map);

  //GoogleMap
  var GoogleMap = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
  });
  GoogleMap.addTo(map);

  //basemapLayerControll
  baseMaps = {
     "OpenStreetMap": osm,
     "OpenToolMap": OpenTopoMap,
    //  "DarkMap": CartoDB_DarkMatter,
     "GoogleMap": GoogleMap
  };


  //マップ種類コントロールをマップに追加
  L.control.layers(baseMaps).addTo(map);

  // ズームコントローラーの位置を右下に変更
  map.zoomControl.setPosition('bottomright');

  // サイドメニューをマップに追加
  var sidebar = L.control.sidebar('sidebar').addTo(map);


}
