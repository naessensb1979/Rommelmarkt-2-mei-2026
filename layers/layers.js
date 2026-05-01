var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Googlesatellite_1 = new ol.layer.Tile({
            'title': 'Google satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RommelmarktfinalLimnanderdreef_rechts_vakken_2 = new ol.format.GeoJSON();
var features_RommelmarktfinalLimnanderdreef_rechts_vakken_2 = format_RommelmarktfinalLimnanderdreef_rechts_vakken_2.readFeatures(json_RommelmarktfinalLimnanderdreef_rechts_vakken_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RommelmarktfinalLimnanderdreef_rechts_vakken_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RommelmarktfinalLimnanderdreef_rechts_vakken_2.addFeatures(features_RommelmarktfinalLimnanderdreef_rechts_vakken_2);
var lyr_RommelmarktfinalLimnanderdreef_rechts_vakken_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RommelmarktfinalLimnanderdreef_rechts_vakken_2, 
                style: style_RommelmarktfinalLimnanderdreef_rechts_vakken_2,
                popuplayertitle: 'Rommelmarkt final — Limnanderdreef_rechts_vakken',
                interactive: true,
                title: '<img src="styles/legend/RommelmarktfinalLimnanderdreef_rechts_vakken_2.png" /> Rommelmarkt final — Limnanderdreef_rechts_vakken'
            });
var format_Rommelmarktfinalsamengevoegd_3 = new ol.format.GeoJSON();
var features_Rommelmarktfinalsamengevoegd_3 = format_Rommelmarktfinalsamengevoegd_3.readFeatures(json_Rommelmarktfinalsamengevoegd_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rommelmarktfinalsamengevoegd_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rommelmarktfinalsamengevoegd_3.addFeatures(features_Rommelmarktfinalsamengevoegd_3);
var lyr_Rommelmarktfinalsamengevoegd_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rommelmarktfinalsamengevoegd_3, 
                style: style_Rommelmarktfinalsamengevoegd_3,
                popuplayertitle: 'Rommelmarkt final - samengevoegd',
                interactive: true,
    title: 'Rommelmarkt final - samengevoegd<br />\
    <img src="styles/legend/Rommelmarktfinalsamengevoegd_3_0.png" /> Betaald<br />\
    <img src="styles/legend/Rommelmarktfinalsamengevoegd_3_1.png" /> Niet betaald<br />\
    <img src="styles/legend/Rommelmarktfinalsamengevoegd_3_2.png" /> Vrij<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlesatellite_1.setVisible(true);lyr_RommelmarktfinalLimnanderdreef_rechts_vakken_2.setVisible(true);lyr_Rommelmarktfinalsamengevoegd_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlesatellite_1,lyr_RommelmarktfinalLimnanderdreef_rechts_vakken_2,lyr_Rommelmarktfinalsamengevoegd_3];
lyr_RommelmarktfinalLimnanderdreef_rechts_vakken_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'lengte': 'lengte', 'stand_id': 'stand_id', 'auto': 'auto', });
lyr_Rommelmarktfinalsamengevoegd_3.set('fieldAliases', {'fid': 'fid', 'stand_id': 'stand_id', 'auto': 'auto', 'Registratie_id': 'Registratie_id', 'Status': 'Status', 'Naam': 'Naam', 'Inschrijving': 'Inschrijving', 'status_kleur': 'status_kleur', });
lyr_RommelmarktfinalLimnanderdreef_rechts_vakken_2.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'lengte': 'Range', 'stand_id': 'Range', 'auto': '', });
lyr_Rommelmarktfinalsamengevoegd_3.set('fieldImages', {'fid': 'TextEdit', 'stand_id': 'Range', 'auto': 'CheckBox', 'Registratie_id': 'Range', 'Status': 'TextEdit', 'Naam': 'Range', 'Inschrijving': 'TextEdit', 'status_kleur': 'TextEdit', });
lyr_RommelmarktfinalLimnanderdreef_rechts_vakken_2.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'lengte': 'no label', 'stand_id': 'no label', 'auto': 'no label', });
lyr_Rommelmarktfinalsamengevoegd_3.set('fieldLabels', {'fid': 'hidden field', 'stand_id': 'no label', 'auto': 'hidden field', 'Registratie_id': 'no label', 'Status': 'hidden field', 'Naam': 'hidden field', 'Inschrijving': 'no label', 'status_kleur': 'no label', });
lyr_Rommelmarktfinalsamengevoegd_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});