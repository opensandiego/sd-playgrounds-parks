// jshint devel:true
function init() {

L.Icon.Default.imagePath = 'images';

    //Fields to Display
    var displayableFields = ["ADDRESS_LO", "OWNERNAME", "OWNERTYPE", "PARK_TYPE", "DESIGNATED", "COMMUNITY_", "COUNCIL_DI"];

    //Field Aliases
    var aliases = {
        "ADDRESS_LO": "Address",
        "OWNERNAME": "Owner",
        "OWNERTYPE": "Owner Type",
        "PARK_TYPE": "Type",
        "COMMUNITY_": "Community",
        "COUNCIL_DI": "Council District",
        "DESIGNATED": "Type"
    };

    //create map
    var map = L.map('map').setView([33.0, -117.0], 10);

    //Map Quest Aerial Imagery
    var MapQuestOpen_Aerial = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
        type: 'sat',
        ext: 'jpg',
        attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
        subdomains: '1234'
    });

    //Dark Map Background - as per suggestion by meeting attendee
    var CartoDB_DarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
    });

    // create the tile layer with correct attribution
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {
        attribution: osmAttrib
    }).addTo(map);

    //feature normal style
    var defaultStyle = {
        color: "#006600",
        weight: 2,
        opacity: 0.6,
        fillOpacity: 0.1,
        fillColor: "#66ff66",
        zIndex: 5
    };

    //feature highlighed style
    var highlightStyle = {
        color: '#006600',
        weight: 2,
        opacity: 0.6,
        fillOpacity: 0.1,
        fillColor: '#FFFF00',
        zIndex: 5000
    };

    //Allows you to attach events to features in layer
    function popUp(f, l) {

            //Output String start - header
            var out = "<table><thead><th>Name</th><th>Value</th></thead>";

            //Put a common name attribute in each feature - makes search possible
            if (f.properties.COMMON_NAM) {
                f.properties.name = f.properties.COMMON_NAM;
            } else if (f.properties.NAME_FULL) {
                f.properties.name = f.properties.NAME_FULL;
            } else if (f.properties.PARKNAME) {
                f.properties.name = f.properties.PARKNAME;
            } else {
                f.properties.name = "Unknown";
            }

            //Name value for each feature
            out += "<tr><td>Name</td><td>" + f.properties.name + "</td></tr>";

            //biuld popup message
            if (f.properties) {
                for (key in f.properties) {
                    for (propt in displayableFields) {
                        if (displayableFields[propt] == key) {

                            if (aliases[key]) {
                                out += "<tr><td>" + aliases[key] + "</td><td>" + f.properties[key] + "</td></tr>";
                            } else {
                                out += "<tr><td>" + key + "</td><td>" + f.properties[key] + "</td></tr>";
                            }
                        }
                    }
                }
                out += "</table>";

                //bind on click popup using output string
                var popup = l.bindPopup(out);

                l.on("mouseover", function (e) {
                    //set feature to highlight style on mouse over
                    l.setStyle(highlightStyle);

                    //open popup on mouse over - not in use
                    //l.openPopup();
                });

                l.on("mouseout", function (e) {

                    //change feature to default style on mouse out
                    l.setStyle(defaultStyle);

                    //close popup on mouse out - not in use
                    //l.closePopup();
                });
            }
        }
        //Parks Geo json layer - built from shapefiles from http://www.sandag.org/index.asp?subclassid=100&fuseaction=home.subclasshome
        //Shapefiles reprojection from state plane to WGS 84
        //Convert from shapefile to GeoJSON by http://mapshaper.org/
        //then combined in one file
    var parksLayer = new L.geoJson(null, {
        style: function (feature) {
            return defaultStyle;
        },
        onEachFeature: popUp
    }).addTo(map);


    $.ajax({
        dataType: "json",
        url: "data/combined.json",
        success: function (data) {
            $(data.features).each(function (key, data) {
                parksLayer.addData(data);
            });
        }
    }).error(function () {});

    //group basemaps for layer control use
    var basemap = {
        "MapQuest Open Aerial": MapQuestOpen_Aerial,
        "CartoDB Dark Matter": CartoDB_DarkMatter,
        "OpenStreetMap": osm
    }

    //group parks for layer control use - combine method
    var parks = {
        "Park Areas": parksLayer
    };


    //add a layer control - ability to turn layers off or on
    L.control.layers(basemap, parks).addTo(map);

    //search control - hooked into combined park JSON - didn't work well with multiple parks, need a common data column as well
    L.control.search({
        layer: parksLayer,
        initial: false,
        zoom: 18,
        propertyName: 'name',
        circleLocation: false
    }).addTo(map);

    //use geolocation to put you into your current location - may want to do this as a button, allow user to choose - now it just does it
    map.locate({
        setView: true,
        maxZoom: 15
    }).on("locationfound", function (e) {
        L.marker(e.latlng).bindLabel("You are here.",{noHide: true}).addTo(map);
    }, this);

};
