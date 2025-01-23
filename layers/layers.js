ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11115876.962423, 1401475.716027, 11137706.205942, 1412444.303778]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lab51_1 = new ol.format.GeoJSON();
var features_lab51_1 = format_lab51_1.readFeatures(json_lab51_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab51_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab51_1.addFeatures(features_lab51_1);
var lyr_lab51_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab51_1, 
                style: style_lab51_1,
                popuplayertitle: 'lab-5 - ชีต1',
                interactive: true,
    title: 'lab-5 - ชีต1<br />\
    <img src="styles/legend/lab51_1_0.png" /> 1<br />\
    <img src="styles/legend/lab51_1_1.png" /> 2<br />\
    <img src="styles/legend/lab51_1_2.png" /> 3<br />\
    <img src="styles/legend/lab51_1_3.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_lab51_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_lab51_1];
lyr_lab51_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'x': 'x', 'y': 'y', 'Picture': 'Picture', });
lyr_lab51_1.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Picture': 'TextEdit', });
lyr_lab51_1.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'x': 'hidden field', 'y': 'hidden field', 'Picture': 'header label - visible with data', });
lyr_lab51_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});